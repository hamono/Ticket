import { Input, Radio, RadioChangeEvent } from "antd";
import React from "react";
import "./style.css";

export interface ParticipantProps {
  value: string;
  name: string;
  id: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleValueChange: (e: RadioChangeEvent) => void;
}

export default function Participant({
  value,
  name,
  id,
  handleIdChange,
  handleNameChange,
  handleValueChange
}: ParticipantProps) {
  return (
    <div className="part-box">
      <div className="part-item">
        <div className="part-title">姓名</div>
        <Input
          onChange={handleNameChange}
          value={name}
          placeholder="请输入您的真实姓名"
        />
      </div>

      <div className="part-item">
        <div className="part-title">省份证号</div>
        <Input
          onChange={handleIdChange}
          value={id}
          placeholder="由于现场安保需要，请输入您的身份证号"
        />
      </div>

      <div className="part-item">
        <div className="part-title">性别</div>
        <Radio.Group onChange={handleValueChange} value={value}>
          <Radio value={"男"}>男</Radio>
          <Radio value={"女"}>女</Radio>
          <Radio value={"其他"}>其他</Radio>
          <Radio value={"不愿透露"}>不愿透露</Radio>
        </Radio.Group>
      </div>
    </div>
  );
}
