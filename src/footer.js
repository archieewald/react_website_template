import React, { Component } from 'react';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div className='container footer'>
                <div className='row'>
                    <div className='rights col-4-12'>
                        <h4>© 2018 All Rights Reserved. Website by archieewald</h4>
                    </div>
                    <div className='departments col-4-12'>
                        <ul>
                            <li><a href='#'>Accounts</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Terms&Conditions</a></li>
                            <li><a href="#">Cookies&Privacy</a></li>
                        </ul>
                    </div>
                    <div className='social col-4-12'>
                        <ul>
                            <li><a href='https://www.facebook.com/' target="_blank" className="icon facebook"></a></li>
                            <li><a href='https://twitter.com/' target="_blank" className="icon twitter"></a></li>
                            <li><a href='https://www.instagram.com/?hl=en' target="_blank" className="icon instagram"></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}