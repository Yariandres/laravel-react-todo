import React from 'react';
import ReactDOM from 'react-dom';

import { AddItemForm } from './AddItemForm';
import { ListView } from './ListView';

function App() {
    return (
        <div className="container">
            <div className="heading bg-info py-4 text-light">
                <h1 className="display-5 text-center">Thing Todo</h1>
            </div>
            <AddItemForm/>
            <ListView/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
