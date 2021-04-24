import { RadioChangeEvent } from "antd";
import React, { useState } from "react";
import { ParticipantProps } from "../components/Participant";

export default function useParticpant():ParticipantProps{
  const [value,setValue]=useState("");
  const [name,setName]=useState('');
  const [id,setId]=useState('');

  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }

  const handleIdChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setId(e.target.value)
  }

  const handleValueChange=(e:RadioChangeEvent)=>{
    setValue(e.target.value)
  }

  return {
    value,name,id,handleIdChange,handleNameChange,handleValueChange
  }
}