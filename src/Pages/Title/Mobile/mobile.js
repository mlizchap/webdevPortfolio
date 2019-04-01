import React, { Component } from 'react';
// import './style.scss'

// import MobileView from './Mobile/mobile';
import './style.scss'

const Arrow = require('../../../static/titlePage/arrow.png')
const Me = require('../../../static/titlePage/me.png')
const flower_left = require('../../../static/titlePage/flower_left.png')
const flower_right = require('../../../static/titlePage/flower_right.png')
const flower_top_right = require('../../../static/titlePage/flower_top_right.png')
const flower_top_left = require('../../../static/titlePage/flower_top_left.png')

class mobile extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="title_mobile">
            <div className="innerContainer">
                <div className="title">
                    <div className="row1">
                        <img src={flower_top_left}  width="12%"/>
                        <h1>Mary</h1>
                        <img src={flower_top_left}  width="12%"/>
                    </div>
                    <div className="row2">
                        <h1>Chapman</h1>
                    </div>
                </div>
                <div className="subTitle">
                    <h2>web developer</h2>
                    <img className="line" src={Arrow} width="80%" />
                </div>
                <div className="image">
                    <img className="flower" src={flower_left} />
                    <img className="portrait" src={Me}  />
                    <img className="flower" src={flower_right} />
                </div>
                
            </div>
            </div>
        );
    }
}

export default mobile;  