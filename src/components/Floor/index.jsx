import React from 'react';
import './style.scss';

const Floor = ({ nr, children }) => {
    const classes = 'floor ' + nr;
    return (
        <div className={classes}>
            <span className="celing">Floor {nr}</span>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Floor;