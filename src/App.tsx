import React from 'react';
import './App.css';
import { Home } from './Home';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
        React App deployed to AWS S3 for seeding tool
                </p>
            </header>
            <Home></Home>
        </div>
    )
}

export default App
