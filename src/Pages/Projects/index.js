import React, { Component } from 'react';

import './style.scss';

const bird = require('../../static/projectsPage/bird.png')
const curl_right = require('../../static/projectsPage/curl_right.png')
const curl_left = require('../../static/projectsPage/curl_left.png')


class index extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="projects">
                <div className="title">
                    {/* <div className="title_col1"> */}
                        <img src={curl_left} className="curl" />
                    {/* </div> */}
                    <div className="title_col2">
                            <div className="row1">
                                <img className="bird" src={bird} />
                            </div>
                            <div className="row2">
                                <h1>PROJECTS</h1>
                            </div>
                    </div>                
                    {/* <div className="title_col3"> */}
                        <img src={curl_right} className="curl"/>
                    {/* </div>   */}
                </div>
                <div className="projectContainer">
                    <div className="project1">
                        PROJECT1
                    </div>
                    <div className="project2">
                        PROJECT2
                    </div>
                </div>
            </div>
        );
    }
}

export default index;