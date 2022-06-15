import React, { useEffect, useRef, useState } from "react";

interface Props {
  label: string;
  required?: boolean;
  email?: boolean;
  invalidMessage?: string;
  [index: string]: any;
}
export const TextInput: React.FC<Props> = ({
  label,
  required,
  email,
  invalidMessage,
  ...props
}) => {
  const [currentInput, setCurrentInput] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasBeenTouched = useRef(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentInput(e.currentTarget.value);
  };

  const validateInput = () => {
    if (hasBeenTouched.current && required) {
      if (email) {
        const re = new RegExp(".+@.+..+");
        setInvalid(!re.test(currentInput));
      } else if (currentInput.length === 0) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      if (invalid) {
        inputRef.current.style.border = "2px solid red";
      } else {
        inputRef.current.style.border = "2px solid rgba(255, 255, 255, 0.295)";
      }
    }
  }, [invalid]);

  return (
    <label className="text-input">
      <span> {`${required ? label + "*" : label} `} </span>
      <input
        {...props}
        onChange={handleChange}
        onBlur={validateInput}
        onFocus={() => (hasBeenTouched.current = true)}
        ref={inputRef}
      />
      <span className="text-input-error">
        {invalid ? invalidMessage || "This field is required" : ""}
      </span>
    </label>
  );
};
