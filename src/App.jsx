import {Header} from "./components/Header.jsx";
import './global.css'

import styles from './App.module.css'
import {Post} from "./components/Post.jsx";
import {Sidebar} from "./components/Sidebar.jsx";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kiqreis.png",
      name: "Kaique Reis",
      role: "Backend Developer"
    },
    content: [
      {type: "paragraph", content: "Lorem ipsum odor amet, consectetuer adipiscing elit. 👍"},
      {
        type: "paragraph",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis placerat netus; at facilisis imperdiet mattis."
      },
      {type: "paragraph", content: "Lorem ipsum odor amet, consectetuer adipiscing elit."},
      {type: "link", content: "My projects"}
    ],
    publishedAt: new Date("2024-11-28")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Easton",
      name: "Lucrecio",
      role: "UI/UX Designer"
    },
    content: [
      {type: "paragraph", content: "Lorem ipsum odor amet, consectetuer adipiscing elit. 👍"},
      {
        type: "paragraph",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis placerat netus; at facilisis imperdiet mattis."
      },
      {type: "paragraph", content: "Lorem ipsum odor amet, consectetuer adipiscing elit."},
      {type: "link", content: "My projects"}
    ],
    publishedAt: new Date("2024-12-05")
  }
]

function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
