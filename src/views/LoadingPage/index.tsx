import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import "./style.css"

export default function Loading() {
  return (
    <div className="loading">
      <LoadingOutlined size={100} />
      <div>数据加载中...</div>
    </div>
  );
}
