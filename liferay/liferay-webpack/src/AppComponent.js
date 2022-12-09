import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.scss";

export default function AppComponent(props = "") {
  console.log(props.contextPath);

  return <div>Hello World</div>;
}
