import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

const HelloWorld = () => {
  const [text, setText] = useState("Before the call");

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      const resp = await returnBody();
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  let myInit = {
    body: {}
  };

  const returnBody = () => {
    return API.post("expo", "/hello-world", myInit);
  };

  return <div>{text}</div>;
};

export default HelloWorld;
