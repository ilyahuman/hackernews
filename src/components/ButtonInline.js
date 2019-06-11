import React from 'react';

const ButtonInline = ({ onClick, type = 'button', children }) => {
    return <button
        type={type}
        className="button-inline"
        onClick={onClick}>
            Archive
    </button>
};

export default ButtonInline;