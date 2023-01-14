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
    <li className={isCompleted ? 'taskCompleted' : ''}>
      <label>
        <input type="checkbox" onClick={() => completeTask(id)}></input>
        <span className={styles.checkmark}></span>
      </label>
      <p>{content}</p>
      <button title="Deletar tarefa" onClick={() => deleteTask(id)}>
        <Trash size={18}/>
      </button>
    </li>
  )
}