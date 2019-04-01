import React, {Component} from 'react';

import './App.css'
import TitlePage from './Pages/Title';

class App extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                <TitlePage />
            </div>    
        );
    }
}

export default App;