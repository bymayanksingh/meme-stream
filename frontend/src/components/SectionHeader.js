import React from "react";

const SectionHeader = (props) => {
  if (!props.title && !props.subtitle) {
    return null;
  }
  return (
    <header className={props.className ? `${props.className}` : ""}>
      {props.title ? <h1 className="d-flex justify-content-center font-weight-bold">{props.title}</h1> : ""}
      {props.subtitle ? <p className="d-flex justify-content-center mb-0">{props.subtitle}</p> : ""}
    </header>
  );
};

export default SectionHeader;
