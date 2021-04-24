import { Input } from "antd";
import React from "react";
import "./style.css";

export interface BuyerPorps {
  phoneNumber: string;
  email: string;
  handleNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Buyer({
  phoneNumber,
  email,
  handleEmailChange,
  handleNumChange,
}: BuyerPorps) {
  return (
    <div className="buyer-box">
      <div className="buyer-item">
        <div className="buyer-title">手机号</div>
        <Input
          value={phoneNumber}
          onChange={handleNumChange}
          placeholder="请输入您的手机号，将用于接收出票短信"
          type="number"
        />
      </div>

      <div className="buyer-item">
        <div className="buyer-title">电子邮件</div>
        <Input
          value={email}
          onChange={handleEmailChange}
          placeholder="请输入您的电子邮箱，将用于接收出票邮件"
          type="email"
        />
      </div>
    </div>
  );
}
