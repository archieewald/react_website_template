import React, { Component } from 'react';
import {
    NavLink,
} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.toggleMenu=this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.stickyNavbar = this.stickyNavbar.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.stickyNavbar);
    }
    toggleMenu = (e) => {
        const button = e.currentTarget;
        const menu = this.refs.navbar;

        button.classList.toggle('change');
        menu.classList.toggle('responsive');
    };
    hideMenu = (e) => {
      const list = e.currentTarget;
      const button = this.refs.navButton;

      if (list.classList.contains('responsive')){
          list.classList.remove('responsive');
          button.classList.remove('change');
      }
    };
    stickyNavbar = (e) => {
        const sticky = this.refs.navigation;

        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if(scrollTop >= sticky.offsetHeight ){
            sticky.classList.add('sticky');
        } else sticky.classList.remove('sticky');

    };
    render(){
        return(
            <div id='navigation' ref='navigation' className="navigation row">
                <img alt='logo' src={require('./images/logo.png')} />
                <button id="navButton" ref="navButton" className="button_nav" onClick={this.toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                </button>
                <nav>
                    <ul className="header_navigation" id="navbar" ref="navbar" onClick={this.hideMenu}>
                        <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
                        <li><NavLink exact to='/about' activeClassName="active">About</NavLink></li>
                        <li><NavLink exact to='/offer' activeClassName="active">Offer</NavLink></li>
                        <li><NavLink exact to='/contact' activeClassName="active">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
};

