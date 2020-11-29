import React from "react";
import ReactJson from "react-json-view";
import classes from "./JsonView.module.css";

type JsonViewProps = {
  src: object;
};

export const JsonView = (props: JsonViewProps) => {
  return (
    <div className={classes.container}>
      <ReactJson
        name={null}
        src={props.src}
        // theme="tomorrow"
        // style={{ background: "#1c2123" }}
        enableClipboard={true}
        displayDataTypes={false}
        displayObjectSize={false}
        collapsed={3}
      />
    </div>
  );
};
