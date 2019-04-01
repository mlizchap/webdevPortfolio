import React, { Component } from 'react';

import './style.scss'

const Arrow = require('../../../static/titlePage/arrow.png')
const Me = require('../../../static/titlePage/me.png')
const flower_left = require('../../../static/titlePage/flower_left.png')
const flower_right = require('../../../static/titlePage/flower_right.png')
const flower_top_right = require('../../../static/titlePage/flower_top_right.png')
const flower_top_left = require('../../../static/titlePage/flower_top_left.png')


class desktop extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="title_desktop">
            <div className="innerContainer">
                <div className="title">
                    <div className="row1">
                    
                        <h1>Mary Chapman</h1>
                        
                    </div>
                    <div className="row2">
                        
                    </div>
                </div>
                <div className="subTitle">
                    <div className="subTitle_col1"> 
                        <img src={flower_top_left} width="40px"/>
                        <h2>web developer</h2>
                        <img src={flower_top_left} width="40px"/>
                    </div>
                    <div className="subTitle_col2">
                        <img className="line" src={Arrow} width="60%" />
                    </div>
                </div>
                <div className="image">
                    <img className="flower" src={flower_left} width="50px"/>
                    <img className="portrait" src={Me}  width="150px"/>
                    <img className="flower" src={flower_right} width="50px"/>
                </div>
                
            </div>
            </div>
        );
    }
}
export default desktop;