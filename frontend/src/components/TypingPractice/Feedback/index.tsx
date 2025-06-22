
import styles from './index.module.scss';
import LogItem from './LogItem';
import type { Log } from './models/Log';

type Props = {
  logs: Log[];
}

const Feedback = ({ logs }: Props) => {
  if (logs.length === 0) {
    return (
      <div className={styles['feedback-container']}>
        <h3 className={styles['logs-title']}>履歴</h3>
        <p className={styles['logs-empty']}>まだ履歴がありません</p>
      </div>
    );
  }
  
  const slicedLogs = logs.slice(-6).reverse();
  return (
    <div className={styles['feedback-container']}>
      <h3 className={styles['logs-title']}>履歴</h3>
      {slicedLogs.map((log, index) => (
        <LogItem key={log.sentence} log={log} opacity={1 - (index / slicedLogs.length)} />
        ))}
    </div>
  )
}

export default Feedback