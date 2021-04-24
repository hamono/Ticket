import { Button } from "antd";
import "./style.css";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export interface CounterProps{
  add:() => void;
  less:()=>void;
  count:number;
}

export default function Counter({add,less,count}:CounterProps) {

  return (
    <div className="count-box">
      <Button
        style={{
          borderRadius: "5px 0 0 5px",
          position: "relative",
          left: "2px",
          zIndex: 1,
        }}
        disabled={count===0}
        onClick={less}
      >
        <MinusOutlined />
      </Button>
      <Button
        style={{
          borderLeft: "0",
          borderRight: "0",
          width: "50px",
          color: "black",
          backgroundColor: "white",
          cursor: "default",
        }}
        disabled={true}
      >
        {count}
      </Button>
      <Button
        style={{
          borderRadius: "0 5px 5px 0",
          position: "relative",
          right: "2px",
        }}
        onClick={add}
      >
        <PlusOutlined />
      </Button>
    </div>
  );
}
