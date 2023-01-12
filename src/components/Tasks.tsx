import { FormEvent, useState } from 'react';
import { PlusCircle, Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Tasks.module.css';

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      content: 'Tarefa 1',
      isCompleted: false
    },
    {
      id: uuidv4(),
      content: 'Tarefa 2',
      isCompleted: false
    },
    {
      id: uuidv4(),
      content: 'Tarefa 3',
      isCompleted: false
    }
  ]);
  const [taskContent, setTaskContent] = useState('');
  const isNewTaskInputEmpty = taskContent.length === 0;
  const totalCreatedTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(task => task.isCompleted===true).length;

  function handleAddTask(event: FormEvent) {
    event.preventDefault()

    if(isNewTaskInputEmpty) return

    const newTask: TaskProps = {
      id: uuidv4(),
      content: taskContent,
      isCompleted: false
    }

    setTasks((state) => [...state, newTask]);
    setTaskContent('');
  }

  function handleCompleteTask(idTask: string) {
    const newTasks = tasks.map(task => task.id === idTask ? {
      ...task,
      isCompleted: !task.isCompleted
    }: task);

    setTasks(newTasks);
  }

  function handleDeleteTask(idTask: string) {
    const filteredTasks = tasks.filter(task => task.id !== idTask);

    setTasks(filteredTasks);
  }

  return (
    <main className={styles.tasks}>
      <form className={styles.addTasks} onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setTaskContent(event.target.value)}
          value={taskContent}
        />

        <button
          type="submit"
        >
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>

      <section className={styles.todoList}>
        <header className={styles.resumeTasks}>
          <div
            className={styles.createdTasks}
          >
            Tarefas criadas<span>{totalCreatedTasks}</span>
          </div>
          <div
            className={styles.completedTasks}
          >
            Concluídas<span>{`${totalCompletedTasks} de ${totalCreatedTasks}`}</span>
          </div>
        </header>

        <ul>
          {
            tasks.map(task => {
              return (
                <li key={task.id} className={task.isCompleted ? 'taskCompleted' : ''}>
                  <label htmlFor="task-completed">
                    <input id="task-completed" type="checkbox" onClick={() => handleCompleteTask(task.id)}></input>
                    <span className={styles.checkmark}></span>
                  </label>
                  <p>{task.content}</p>
                  <button title="Deletar tarefa" onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={18}/>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  );
}