import styles from "./index.module.scss";

type Props = {
  questionText: string;
};

const TargetSentence = ({ questionText }: Props) => {
  return (
    <p className={styles["question"]}>{questionText.toLocaleUpperCase()}</p>
  );
};

export default TargetSentence;
