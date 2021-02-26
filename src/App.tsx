import React, { useState } from 'react';
import logo from './primereact-logo.png';
import './App.css';

import { Button } from 'primereact/button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primeicons/primeicons.css';

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <br />
            <Button label="PrimeReact" icon="pi pi-check" onClick={increment} />
            <p>Number of Clicks: {count}</p>
        </div>
    );

}

export default App;
