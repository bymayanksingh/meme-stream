import React from "react";


  const Section = (props) => {
    const { bg, textColor, className, children } = props;
    return (
      <section
        className={
          "py-5 position-relative " +
          (props.bg ? `bg-${bg} ` : "") +
          (props.textColor ? `text-${textColor} ` : "") +
          (props.className ? `${className} ` : "")
        }
      >
        <div>{children}</div>
      </section>
    );
  };

  export default Section;