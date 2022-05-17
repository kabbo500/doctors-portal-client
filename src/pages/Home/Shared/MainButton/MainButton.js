import React from 'react';

const MainButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold">{children}</button>
    );
};

export default MainButton;