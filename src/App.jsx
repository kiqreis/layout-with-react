import { Header } from "./components/Header.jsx";
import './global.css'

import styles from './App.module.css'
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
