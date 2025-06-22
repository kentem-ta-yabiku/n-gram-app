import type { Question } from "../models/Question";
import styles from "./index.module.scss";

type Props = {
  question: Question;
};

const TargetSentence = ({ question }: Props) => {
  return (
    <div className={styles["target-sentence-container"]}>
      <p className={styles["question"]}>{question.sentence.toLocaleUpperCase()}</p>
      <p className={styles['romaji']}>{question.romaji}</p>
    </div>
  );
};

export default TargetSentence;
