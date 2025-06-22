import { useState } from "react";
import TargetSentence from "./TargetSentence";
import UserInput from "./UserInput";
import styles from "./index.module.scss";
import { is_similar } from "@ks-kentem/wasm-n-gram";
import Feedback from "./Feedback";
import type { Log } from "./Feedback/models/Log";
import { getRondomQuestion } from "./consts";
import Stats from "./Stats";

const SIMILAR_RATE = 0.7;

const TypingPractice = () => {
  const [userInput, setUserInput] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);
  const [targetSentence, setTargetSentence] = useState(getRondomQuestion())

  const isSimilar = is_similar(userInput, targetSentence.romaji, SIMILAR_RATE);

  const handleUserInputChange = (value: string) => {
    setUserInput(value.toLocaleLowerCase());
  };

  const handleNextQuerstion = () => {
    if (userInput.trim() === "") return;
    setTargetSentence(getRondomQuestion());
    if (isSimilar) {
      setLogs((prevLogs) => [...prevLogs, {sentence: userInput, isCorrect: true }]);
      setUserInput("");
    } else {
      setLogs((prevLogs) => [...prevLogs, {sentence: userInput, isCorrect: false }]);
      setUserInput("");
    }
  }

  return (
    <div className={styles["typing-practice-container"]}>
      <TargetSentence question={targetSentence} />
      <UserInput
        value={userInput}
        placeholder={targetSentence.romaji}
        onChange={handleUserInputChange}
        onClickEnter={handleNextQuerstion}
      />
      <Stats
        collectCount={logs.filter(log => log.isCorrect).length}
        typeCount={logs.reduce((acc, log) => acc + log.sentence.length, 0)}
      />
      <Feedback logs={logs} />
    </div>
  );
};

export default TypingPractice;
