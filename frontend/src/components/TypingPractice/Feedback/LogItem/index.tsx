import IconNO from '../IconNO'
import IconOK from '../IconOK'
import type { Log } from '../models/Log'
import styles from './index.module.scss'

type Props = {
  log: Log
  opacity: number
}

const MAX_LENGTH = 40

const LogItem = ({log, opacity}: Props) => {
  return (
    <div className={styles['log-box']} key={log.sentence}>
      {log.isCorrect ? <IconOK/> : <IconNO/>}
      <p
        className={styles['log']}
        style={{
          opacity: opacity.toString(),
        }}
        >
        {log.sentence.length > MAX_LENGTH 
          ? `${log.sentence.slice(0, MAX_LENGTH)}...`
          : log.sentence}
      </p>
    </div>
  )
}

export default LogItem