import React, { useEffect, useState } from 'react';
import randomColor from '../../utils/randomColor';
import './style.scss';

const Door = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const door = 'door ' + (isOpen ? 'open': false);
    const color = randomColor();
    return (
        <div className="back-door" onClick={() => setIsOpen(!isOpen)}>
            <div className={door} style={{ background: color }} onClick={() => setIsOpen(!isOpen)}>
                <div className="knob"></div>
            </div>
        </div>
    );
};

export default React.memo(Door);