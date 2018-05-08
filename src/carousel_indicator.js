import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: -20px;
`;

const Pip = styled.span`
  background: ${(props) => (props.isCurrent) ? 'darkgrey' : 'gainsboro'};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`;

class Indicator extends Component {
    renderThisPosition = (position) => {
      this.props.changePosition(position);
    };
    render() {
        const { length, position } = this.props;
        return (
            <Container className="carousel_indicator">
                {
                    Array.from({ length }, (pip, i) =>
                        (<Pip
                            key={ i }
                            isCurrent={ i === position }
                            onClick={()=>this.renderThisPosition(i)}
                        />)
                    )
                }
            </Container>
        )
    }
}

Indicator.propTypes = {
    length: PropTypes.number,
    position: PropTypes.number
};

export default Indicator;