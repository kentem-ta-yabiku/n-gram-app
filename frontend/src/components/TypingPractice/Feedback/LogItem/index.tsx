import type { Log } from '../models/Log'
import styles from './index.module.scss'

type Props = {
  key: string,
  log: Log
  opacity: number
}

const MAX_LENGTH = 40

const LogItem = ({key, log, opacity}: Props) => {
  return (
    <p
      key={key}
      className={styles['log']}
      style={{
        opacity: opacity.toString(),
        color: log.isCorrect ? '#A5D6A7' : '#EF9A9A',
      }}
      >
      {log.sentence.length > MAX_LENGTH 
        ? `${log.sentence.slice(0, MAX_LENGTH)}...`
        : log.sentence}
    </p>
  )
}

export default LogItem