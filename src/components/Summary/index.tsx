import { Button } from "antd";
import React from "react";
import "./style.css";

export default function Summary({
  ticketNum,
  price,
  handleSubmit
}: {
  ticketNum?: number;
  price?: number;
  handleSubmit:()=>void;
}) {
  return (
    <div className="sum-box">
      <div>
        <div className="sum-ticket">
          共 <span>{ticketNum}</span> 张票
        </div>
        <div className="sum-price">
          合计 <span>{price}</span> 元
        </div>
      </div>
      <Button size="large" type="primary" onClick={handleSubmit}>
        立即支付
      </Button>
    </div>
  );
}
