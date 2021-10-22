import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;

  console.log(props);

  const contentStyle = {
    color, // プロパティ名と変数名が同じ場合は color, のように省略可能
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
