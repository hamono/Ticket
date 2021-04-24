import React, { useState } from "react";
import { BuyerPorps } from "../components/Buyer";

export default function useBuyer():BuyerPorps {
  const [phoneNumber, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return {
    phoneNumber,
    email,
    handleNumChange,
    handleEmailChange,
  };
}
