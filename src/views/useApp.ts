import { message } from "antd";
import { useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Ticket from "../interface/Ticket";

export default function useApp(
  reCount: number,
  spCount: number,
  stCount: number
) {
  const [initData, setData] = useState<Ticket>();
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState<number>();
  const [sum, setSum] = useState<number>();

  const getData = async () => {
    try {
      setLoading(true);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = await useFetch<Ticket>({
        url: "/api/data.json",
        method: "GET",
      });

      setData(data);
      setLoading(false);
    } catch (e: any) {
      message.error(e.message);
    } 
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    handlePrice();
  })

  const handlePrice = useCallback(() => {
    if (loading) {
      return;
    }

    if (initData) {
      const temp1 =
        reCount * initData?.remoteTicket.price +
        spCount * initData?.sponsor.price +
        stCount * initData?.standardTicket.price;

      const temp2 = reCount + spCount + stCount;

      setPrice(temp1);
      setSum(temp2);
    }
  }, [loading, reCount, initData, spCount, stCount]);

  return {
    initData,
    loading,
    price,
    sum
  };
}
