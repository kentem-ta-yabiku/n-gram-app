import type { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./index.module.scss";


const ONLY_ALPHABET_REGEX = /[^a-zA-Z ]/g;

type Props = {
  value: string;
  placeholder: string;
  onChange: (input: string) => void;
  onClickEnter?: () => void;
};

const UserInput = ({ value, placeholder, onChange, onClickEnter }: Props) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filtered = e.target.value.replace(ONLY_ALPHABET_REGEX, "");
    onChange(filtered);
  };

  const handleClickEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && onClickEnter) {
      onClickEnter();
    }
  }

  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["input"]}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleClickEnter}
        />
    </div>
  );
};

export default UserInput;
