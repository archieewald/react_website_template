import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import './style/App.scss';
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <Route exact path='/' component={Main}/>
                    {/*<Route exact path='/about' component={About}/>*/}
                    {/*<Route exact path='/offer' component={Offer}/>*/}
                    {/*<Route exact path='/contact' component={Contact}/>*/}
                </div>
            </BrowserRouter>
        );
    };
}


export default App;


