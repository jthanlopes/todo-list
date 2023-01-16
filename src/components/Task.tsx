import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  isCompleted: boolean;
  content: string;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({id, isCompleted, content, completeTask, deleteTask}: TaskProps) {
  return (
    <li className={styles.task}>
      <label>
        <input type="checkbox" onClick={() => completeTask(id)}></input>
        <span className={styles.checkmark}></span>
        <p>{content}</p>
      </label>
      <button title="Deletar tarefa" onClick={() => deleteTask(id)}>
        <Trash size={18}/>
      </button>
    </li>
  )
}