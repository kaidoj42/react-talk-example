import React, { useEffect, useState } from 'react';
import randomColor from '../../utils/randomColor';
import './style.scss';

const Window = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open])

    const windowClasses = 'window ' + (isOpen ? 'open': false);
    const color = randomColor();
    return (
        <div className="window-frame" style={{ background: color }} onClick={() => setIsOpen(!isOpen)}>
            <div className={windowClasses}  style={{ background: color }}  onClick={() => setIsOpen(!isOpen)}>
                <div className="vert-bar"></div>
                <div className="hor-bar"></div>
            </div>
        </div>
    );
};

export default React.memo(Window);