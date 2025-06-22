import StatCard from './StatCard'
import styles from './index.module.scss'

type Props = {
  collectCount: number
  typeCount: number
}

const Stats = ({collectCount, typeCount}: Props) => {
  return (
    <div className={styles['stats']}>
      <StatCard lable='正解数' value={collectCount} />
      <StatCard lable='キーボードたたいた数' value={typeCount} />
    </div>
  )
}

export default Stats