import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './Home';

function Main() {
    return (
        <div className="container">
            <h1>This is the main component</h1>
            <Home/>
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
