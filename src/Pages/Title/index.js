import React, { Component } from 'react';

import MobileView from './Mobile/mobile'
import DesktopView from './Desktop/desktop'

class mobile extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
          
    render() {
        console.log(this.state.width)
        return (
            <div>
                {(this.state.width < 600) ?  <MobileView /> : <DesktopView />}
               test
            </div>
        );
    }
}

export default mobile;