import React, { Component } from 'react';
import Carousel from './carousel.js';
import Footer from "./footer.js";


export default class Main extends React.Component{
    addBlur = (e) => {
        //blur slide background on hover
        const element = e.currentTarget;
        const blurred = element.parentElement.firstElementChild;
        blurred.classList.add('blurred');
    }
    removeBlur = (e) => {
        //unblur slide background on hover
        const element = e.currentTarget;
        const blurred = element.parentElement.firstElementChild;
        blurred.classList.remove('blurred');
    }
    showDetails = (e) =>{
        //show .description
        const element = e.currentTarget;
        const link = element.lastChild;
        link.classList.add('show');
    }
    hideDetails = (e) =>{
        //hide .description
        const element = e.currentTarget;
        const link = element.lastChild;
        link.classList.remove('show');
    }
    render(){
        return(
            <div className="container main">
                <div className="main_layer">
                    <section className="letter_box row">
                        <h1>Forggoten Beauty</h1>
                    </section>
                    <section className="row carousel_container">
                        <div className="col-6-12 whole_height cars">
                            <Carousel slideTime={115} >
                                <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                    <div className="car-1 image"></div>
                                    <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                        <h4 className="description">Perfect machine</h4>
                                        <h4>available 24/7</h4>
                                        <h3 className="header">Just for you</h3>
                                    </div>
                                    <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                </div>
                                <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                    <div className="car-2 image"></div>
                                    <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                        <h4 className="description">Perfect machine</h4>
                                        <h4>available 24/7</h4>
                                        <h3 className="header">Just for you</h3>
                                    </div>
                                    <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                </div>
                                <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                    <div className="car-3 image"></div>
                                    <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                        <h4 className="description">Perfect machine</h4>
                                        <h4>available 24/7</h4>
                                        <h3 className="header">Just for you</h3>
                                    </div>
                                    <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                </div>
                            </Carousel>
                        </div>
                        <div className="row">
                            <div className="col-6-12 half_height boats">
                                <Carousel slideTime={6}>
                                    <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                        <div className="boat-1 image"></div>
                                        <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                            <h4 className='description'>Sail away!</h4>
                                            <h4>available 24/7</h4>
                                            <h3 className="header">Just for you</h3>
                                        </div>
                                        <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                    </div>
                                    <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                        <div className="boat-2 image"></div>
                                        <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                            <h4 className='description'>Sail away!</h4>
                                            <h4>available 24/7</h4>
                                            <h3 className="header">Just for you</h3>
                                        </div>
                                        <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                    </div>
                                </Carousel>
                            </div>
                            <div className="col-6-12 half_height moto">
                                <div className="slide" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}>
                                    <div className="moto-1 image"></div>
                                    <div className="content" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>
                                        <h4 className='description'>Route 66</h4>
                                        <h4>available 24/7</h4>
                                        <h3 className="header">Just for you</h3>
                                    </div>
                                    <h4 className="details" onMouseEnter={this.addBlur} onMouseLeave={this.removeBlur}>Read more</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        )
    }
};