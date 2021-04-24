import Counter, { CounterProps } from "../Counter"
import "./style.css"

export default function Ticket({
  title,
  des,
  price,
  tips,
  split,
  counterPorps
}: {
  title: string;
  des?: string;
  price?: number;
  counterPorps:CounterProps;
  tips?: string;
  split?:boolean;
}) {
  return <div className="ticket-box" style={split?{borderBottom:"1px solid rgba(212, 212, 212,0.5)"}:{}}>
    <div className="ticket-details">
      <div className="ticket-title">{title}</div>
      <div className="ticket-des">{des}</div>
      <div className="ticket-price">{price+" 元"} <span className="ticket-tips">{tips}</span></div>
    </div>
    <Counter {...counterPorps}/>
  </div>
}
