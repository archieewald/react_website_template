import React, { Component, Children, cloneElement } from 'react';
import Swipeable from 'react-swipeable';
import { throttle } from 'lodash';
import styled from 'styled-components';

import Wrapper from './carousel_wrapper.js';
import CarouselSlot from './carousel_slot.js';
import CarouselContainer from './carousel_conatainer.js';
import Indicator from './carousel_indicator.js';

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: 0,
            sliding: false,
            direction: props.children.length === 2 ? 'prev' : 'next',
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }
    componentDidMount(){
        const slidingTime = this.props.slideTime;
        let intervalId = setInterval(() => {
            const position = this.state.position;
            const { children } = this.props;
            const numItems = children.length || 1;

            let newPosition = position + 1 === numItems ? 0 : position + 1;

            this.setState({
                position: newPosition,
            });
            this.getOrder(newPosition);
            this.doSliding('next', newPosition);
        }, (slidingTime * 1000));
    };
    getOrder(itemIndex) {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length || 1;
        if (numItems === 2) return itemIndex;
        if (itemIndex - position < 0) {
            return numItems - Math.abs(itemIndex - position);
        }
        return itemIndex - position;
    }
    doSliding = (direction, position) => {
        this.setState({
            sliding: true,
            position,
            direction
        });
        setTimeout(() => {
            this.setState({
                sliding: false
            })
        }, 50)
    };
    nextSlide = () => {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length || 1;

        if (numItems === 2 && position === 1)
            return this.doSliding('next', position === numItems - 1 ? 0 : position + 1);

        this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    };
    prevSlide = () => {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length;
        if (numItems === 2 && position === 0)
            return this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
    };
    handleSwipe = throttle((isNext) => {
        const { children } = this.props;
        const numItems = children.length || 1;
        if (isNext && numItems > 1) {
            this.nextSlide()
        } else if (numItems > 1) {
            this.prevSlide()
        }
    }, 500, { trailing: false });
    changePosition = (position) => {
        const currentPosition = this.state.position;
        this.setState({
            position: position,
        });
        this.getOrder(position);
        if( position > currentPosition ){
            this.doSliding('next', position);
        } else if ( position < currentPosition ){
            this.doSliding('prev', position);
        }
    };
    render() {
        const IndicatorD = styled.div`
        margin:0;
        `;
        const { children } = this.props;
        const { sliding, direction, position } = this.state;

        const childrenWithProps = Children.map(children,
            (child) => cloneElement(child, {
                numSlides: children.length || 1
            })
        );
        return (
            <div className="carousel">
                <IndicatorD>
                    { childrenWithProps.length > 1 &&
                    (<Indicator
                        length={ childrenWithProps.length }
                        position={ position }
                        changePosition={this.changePosition}
                    />)
                    }
                </IndicatorD>
                <Swipeable className="swipe_wrapper"
                    onSwipingLeft={ () => this.handleSwipe(true) }
                    onSwipingRight={ () => this.handleSwipe() }
                >
                    <Wrapper>
                        <CarouselContainer
                            sliding={ sliding }
                            direction={ direction }
                            numSlides={ childrenWithProps.length }
                        >
                            { childrenWithProps.map((child, index) => (
                                <CarouselSlot
                                    key={ index }
                                    order={ this.getOrder(index) }
                                    numSlides={ childrenWithProps.length }
                                    position={ position }
                                >
                                    {child}
                                </CarouselSlot>
                            )) }
                        </CarouselContainer>
                    </Wrapper>
                </Swipeable>
            </div>
        )
    }
}

