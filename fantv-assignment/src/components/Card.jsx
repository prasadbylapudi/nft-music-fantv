import React from 'react';

const Card = ({ children,background,width, height }) => {
  return (
    <div className={`rounded-[24px] ${background} shadow-lg`} style={{ width, height }}>
      {children}
    </div>
  );
};

export default Card;