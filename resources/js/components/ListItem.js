import React from 'react'

export const ListItem = ({ items }) => {
    return (
        <div className="item">
            <ul>
                <li className="lead">{items}</li>
            </ul>
        </div>

    );
};
