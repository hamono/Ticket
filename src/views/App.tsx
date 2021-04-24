import { message } from "antd";
import React from "react";
import Buyer from "../components/Buyer";
import Options from "../components/Options";
import Participant from "../components/Participant";
import Summary from "../components/Summary";
import Ticket from "../components/Ticket";
import useBuyer from "../hooks/useBuyer";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import useParticpant from "../hooks/useParticpant";
import { Submit } from "../interface/Submit";
import "./App.css";
import Loading from "./LoadingPage";
import useApp from "./useApp";

function App() {
  const remoteProps = useCounter();
  const sponsorProps = useCounter();
  const standardProps = useCounter();

  const buyerPorps = useBuyer();

  const participantProps1 = useParticpant();
  const participantProps2 = useParticpant();

  const { initData, loading, price, sum } = useApp(
    remoteProps.count,
    sponsorProps.count,
    standardProps.count
  );

  const handleSubmit = async () => {
    message.loading({key:"loading",content:"正在提交订单..."})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useFetch<any, Submit>({
      url: "/api/upload/",
      method: "POST",
      body: {
        remoteTicket: remoteProps.count,
        sponsor: sponsorProps.count,
        standardTicket: standardProps.count,
        buyer: {
          phoneNumber: buyerPorps.phoneNumber,
          email: buyerPorps.email,
        },
        participant: [
          {
            name: participantProps1.name,
            id: participantProps1.id,
            gender: participantProps1.value,
          },
          {
            name: participantProps2.name,
            id: participantProps2.id,
            gender: participantProps2.value,
          },
        ],
      },
    });
    message.destroy("loading");
  };

  const tickets = loading ? null : (
    <div>
      <Ticket
        counterPorps={remoteProps}
        title="远程支持票"
        des={initData?.remoteTicket.des}
        price={initData?.remoteTicket.price}
        tips={initData?.remoteTicket.tips}
        split={true}
      />
      <Ticket
        counterPorps={sponsorProps}
        title="赞助商"
        des={initData?.sponsor.des}
        price={initData?.sponsor.price}
        tips={initData?.sponsor.tips}
        split={true}
      />
      <Ticket
        counterPorps={standardProps}
        title="标准票"
        des={initData?.standardTicket.des}
        price={initData?.standardTicket.price}
        tips={initData?.standardTicket.tips}
      />
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Options title="选择票种" content={tickets} />
      <Options title="购票人信息" content={<Buyer {...buyerPorps} />} />
      <Options
        title="参与者信息（赞助商票第1位）"
        content={<Participant {...participantProps1} />}
      />
      <Options
        title="参与者信息（赞助商票第2位）"
        content={<Participant {...participantProps2} />}
      />
      <Summary handleSubmit={handleSubmit} ticketNum={sum} price={price} />
    </div>
  );
}

export default App;
