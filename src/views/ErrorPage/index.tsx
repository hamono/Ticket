import { FrownOutlined } from "@ant-design/icons";
import React from "react";
import "./style.css"

export default function ErrorPage(){
  return <div className="error">
    <FrownOutlined size={100} />
    <div>页面出错啦</div>
  </div>
}