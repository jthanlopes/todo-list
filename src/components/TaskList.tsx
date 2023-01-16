import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { EmptyTasks } from './EmptyTasks';

import { FormAddNewTask } from './FormAddNewTask';
import { Task } from './Task';

import styles from './TaskList.module.css';

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storageTasksAsJSON = localStorage.getItem('@todolist:tasks');

    if(storageTasksAsJSON) {
      return JSON.parse(storageTasksAsJSON)
    }

    return [];
  });
  const [taskContent, setTaskContent] = useState('');
  const isNewTaskInputEmpty = taskContent.length === 0;
  const totalCreatedTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(task => task.isCompleted===true).length;

  useEffect(() => {
    const tasksToJSON = JSON.stringify(tasks);

    localStorage.setItem('@todolist:tasks', tasksToJSON);
  }, [tasks]);

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

    toast.success('Tarefa criada com sucesso!');
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

    toast.error('Tarefa removida com sucesso!');
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

          {
            (tasks.length === 0)
            ? <EmptyTasks />
            : <ul>
                {tasks.map(task => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      isCompleted={task.isCompleted}
                      content={task.content}
                      completeTask={handleCompleteTask}
                      deleteTask={handleDeleteTask}
                    />
                  )
                })}
              </ul>
          }
      </section>
    </main>
  );
}