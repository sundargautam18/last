import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="custom-card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
