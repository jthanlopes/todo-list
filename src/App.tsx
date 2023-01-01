import { PlusCircle } from 'phosphor-react';
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './assets/App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.boxAddTask}>
          <input type="text" />

          <button>
            Criar
            <PlusCircle />
          </button>
        </div>

        <main className={styles.boxTasks}>
          <header className={styles.resumeTasks}>
            <div>Tarefas criadas <span>1</span></div>
            <div>Concluídas <span>0 de 1</span></div>
          </header>

          <Task />
        </main>
      </div>
    </>
  )
}