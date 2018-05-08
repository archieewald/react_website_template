import React, { Component } from 'react';
import Carousel from './carousel.js';
import CarouselItem from './carousel_item.js';


export default class Main extends React.Component{
    render(){
        return(
            <div className="container main">
                <div className="main_layer">
                    <section className="letter_box row">
                        <h1>Forggoten Beauty</h1>
                    </section>
                    <section className="row carousel_container">
                        <div className="col-6-12 whole_height cars">
                            <Carousel slideTime={5} >
                                <div className="car-1"></div>
                                <div className="car-2"></div>
                                <div className="car-3"></div>
                            </Carousel>
                        </div>
                        <div className="row">
                            <div className="col-6-12 half_height boats">
                                <Carousel slideTime={6}>
                                    <div className="boat-1"></div>
                                    <div className="boat-2"></div>

                                </Carousel>
                            </div>
                            <div className="col-6-12 half_height moto">
                                <div className="moto-1"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
};