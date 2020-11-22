import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { User } from '../components/User';

function Main() {
    return (
        <Fragment>
            <User/>
        </Fragment>
    );
}

export default Main;


ReactDOM.render(<Main />, document.getElementById('app'));

