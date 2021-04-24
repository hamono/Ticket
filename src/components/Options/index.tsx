import React from "react";
import "./style.css"

export default function Options({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return <div className='options-box'>
    <div className="options-title">{title}</div>
    {content}
  </div>
}
