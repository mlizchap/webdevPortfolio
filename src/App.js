import React, {Component} from 'react';

import './App.css'
import TitlePage from './Pages/Title';
import ProjectPage from './Pages/Projects';


class App extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                {/* <TitlePage /> */}
                <ProjectPage />
            </div>    
        );
    }
}

export default App;