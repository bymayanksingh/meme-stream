import React from "react";

const AspectRatio = (props) => {
  return (
    <div className="Outer" style={{
        position:"relative",
        width: "100%",
        height: "0",
        paddingBottom: `${(1/props.ratio)*100}%`

    }}>
      <div className="Inner" style={{
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          "alignItems": "center",
          "justifyContent": "center",
          overflow: "hidden"
      }}>
        {props.children}
      </div>
    </div>
  );
};

export default AspectRatio;