import React from "react";

const Card = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
};

export const CardContent = ({ children }) => {
    return <div className="p-2">{children}</div>;
};

export default Card;
