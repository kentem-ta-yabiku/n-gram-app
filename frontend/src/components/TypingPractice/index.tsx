import { useState } from "react";
import TargetSentence from "./TargetSentence";
import UserInput from "./UserInput";
import styles from "./index.module.scss";
import { is_similar } from "@ks-kentem/wasm-n-gram";

const TypingPractice = () => {
  const [userInput, setUserInput] = useState("");
  const targetSentence = "question";

  const isSimilar = is_similar(userInput, targetSentence, 0.5);

  const handleUserInputChange = (value: string) => {
    setUserInput(value.toLocaleLowerCase());
  };

  return (
    <div className={styles["typing-practice-container"]}>
      <TargetSentence questionText={targetSentence} />
      <UserInput
        value={userInput}
        placeholder="Let's Typing!"
        onChange={handleUserInputChange}
      />
      {isSimilar ? "OK " : "NO"}
    </div>
  );
};

export default TypingPractice;
