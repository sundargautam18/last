import React from "react";
import "./index.css";
export interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>{text}</div>
  );
};

export default MyComponent;
