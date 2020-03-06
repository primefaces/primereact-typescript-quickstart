import React from 'react';
import logo from './primereact-logo.png';
import './App.css';

import { Button } from 'primereact/button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

interface Props {}
interface State {
    count: number;
}

class App extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }
    
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <br/>
                <Button label="PrimeReact" icon="pi pi-check" onClick={this.increment} />
                <p>Number of Clicks:{this.state.count}</p>
            </div>
        );
    }
}

export default App;
