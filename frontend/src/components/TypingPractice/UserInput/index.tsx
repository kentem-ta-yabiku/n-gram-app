import type { ChangeEventHandler } from "react";
import styles from "./index.module.scss";

const ONLY_ALPHABET_REGEX = /[^a-zA-Z]/g;

type Props = {
  value: string;
  placeholder: string;
  onChange: (input: string) => void;
};

const UserInput = ({ value, placeholder, onChange }: Props) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filtered = e.target.value.replace(ONLY_ALPHABET_REGEX, "");
    onChange(filtered);
  };

  return (
    <input
      className={styles["input"]}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default UserInput;
