import React, { Component } from 'react';
import Carousel from './carousel.js';
import CarouselItem from './carousel_item.js';


export default class Main extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6-12 biggie">
                        <Carousel>
                            <CarouselItem index={ 1} />
                            <CarouselItem index={ 2} />
                            <CarouselItem index={ 3} />
                            <CarouselItem index={ 4} />
                        </Carousel>
                    </div>
                    <div className="row">
                        <div className="col-6-12">
                            <Carousel>
                                <CarouselItem index={ 1} />
                                <CarouselItem index={ 2} />
                                <CarouselItem index={ 3} />
                                <CarouselItem index={ 4} />
                            </Carousel>
                        </div>
                        <div className="col-6-12">
                            <Carousel>
                                <CarouselItem index={ 1} />
                                <CarouselItem index={ 2} />
                                <CarouselItem index={ 3} />
                                <CarouselItem index={ 4} />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};