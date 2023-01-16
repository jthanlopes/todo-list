import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header";
import { TaskList } from './components/TaskList';

import 'react-toastify/dist/ReactToastify.css';
import styles from './assets/App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskList />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}