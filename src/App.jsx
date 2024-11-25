import { Header } from "./components/Header.jsx";
import './global.css'

import styles from './App.module.css'
import { Post } from "./Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jurandir"
            content="Lorem ipsum dolor sit amet. Et dignissimos optio est temporibus totam ut nulla eius sit itaque quasi vel excepturi odit aut distinctio culpa et facilis enim? Eos perferendis nobis vel earum quia in commodi ipsa vel necessitatibus nihil ut aliquid omnis. Eum nihil iste non aliquam optio aut exercitationem dolores aut beatae sint id voluptatem dolorem non cupiditate tempora."
          />
          <Post
            author="Lucrecio"
            content="Eum voluptatem omnis 33 impedit eius eos rerum Quis in nihil saepe ut quam enim eos consequatur corrupti. Qui consequatur veniam sed possimus sunt aut laboriosam quos sit omnis nemo id cumque perspiciatis ut enim voluptas."
          />
        </main>
      </div>
    </>
  )
}

export default App
