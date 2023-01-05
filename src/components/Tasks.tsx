import styles from './Tasks.module.css';
import { PlusCircle, Trash } from 'phosphor-react';

export function Tasks() {
  return (
    <main className={styles.tasks}>
      <div className={styles.addTasks}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>

        <button>
          Criar
          <PlusCircle />
        </button>
      </div>

      <section className={styles.listTasks}>
        <header className={styles.resumeTasks}>
          <div>Tarefas criadas <span>1</span></div>
          <div>Concluídas <span>0 de 1</span></div>
        </header>

        <ul>
          <li>
            <button>v</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fuga.</p>
            <button title="Deletar tarefa">
              <Trash />
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
}