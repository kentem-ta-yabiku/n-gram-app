import styles from './index.module.scss';

type Props = {
  lable: string;
  value: number;
}

const StatCard = ({lable, value}: Props) => {
  return (
    <div className={styles['stat-card']}>
      <div className={styles['stat-label']}>{lable}</div>
      <div className={styles['stat-value']}>{value}</div>
    </div>
  )
}

export default StatCard