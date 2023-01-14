import { FormEvent, useState } from 'react';
import { Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Tasks.module.css';
import { FormAddNewTask } from './FormAddNewTask';

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
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

  function handleSetTaskContent(content: string) {
    setTaskContent(content)
  }

  function handleDeleteTask(idTask: string) {
    const filteredTasks = tasks.filter(task => task.id !== idTask);

    setTasks(filteredTasks);
  }

  return (
    <main className={styles.tasks}>
      <FormAddNewTask
        addNewTask={handleAddTask}
        setNewTaskContent={handleSetTaskContent}
        taskContent={taskContent}
      />

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