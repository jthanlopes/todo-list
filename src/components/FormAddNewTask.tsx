import { FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './FormAddNewTask.module.css'

interface FormAddNewTaskProps {
  addNewTask: (event: FormEvent) => void;
  setNewTaskContent: (event: string) => void;
  taskContent: string;
}

export function FormAddNewTask({addNewTask, setNewTaskContent, taskContent}: FormAddNewTaskProps) {
  return (
    <form className={styles.addTasks} onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setNewTaskContent(event.target.value)}
          value={taskContent}
          required
        />

        <button
          type="submit"
        >
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>
  )
}