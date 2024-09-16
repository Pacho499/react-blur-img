import React from "react";

const Input = ({
  type,
  text,
  placeHolder,
  handleChange,
  initialValue,
}: {
  type: string;
  text: string;
  placeHolder?: string;
  handleChange: (changeFromChild: number | string, key: string) => void;
  initialValue?: string | number;
}) => {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      handleChange(Number(e.target.value), text);
    } else {
      handleChange(e.target.value, text);
    }
  };
  return (
    <label>
      {text}
      <input
        type={type}
        onChange={(e) => handleOnchange(e)}
        placeholder={placeHolder}
        value={initialValue}
      />
    </label>
  );
};

export default Input;
