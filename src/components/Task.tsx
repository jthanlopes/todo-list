import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (
    <ul className={styles.taskList}>
      <li>
        <button>v</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fuga.</p>
        <button>
          <Trash />
        </button>
      </li>
    </ul>
  )
}