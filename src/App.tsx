import { Header } from "./components/Header";
import { Tasks } from './components/Tasks';

import styles from './assets/App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </>
  )
}