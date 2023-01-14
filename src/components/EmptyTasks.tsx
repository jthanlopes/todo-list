import imgClipboard from '../assets/images/img-clipboard.svg';
import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={imgClipboard} />
      <div>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}