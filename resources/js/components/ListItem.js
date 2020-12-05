import React from 'react'

export const ListItem = ({ items, completed }) => {
    return (
        <div className="item">
            <ul>
                <li className="lead">{items}</li>
                {console.log(completed)}
            </ul>
        </div>

    );
};
