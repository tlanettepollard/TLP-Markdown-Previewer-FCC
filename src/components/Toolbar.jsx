import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFreeCodeCamp } from '@fortawesome/fontawesome-free-regular';
import './styles/Toolbar.css';

export const Toolbar = (props) => {
    return (
        <div className="toolbar">
            <FontAwesomeIcon icon={FaFreeCodeCamp}/>
            {props.text}
        </div>
    )
}
 