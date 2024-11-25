import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1672823237947-a14ceae21384?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="sidebar image"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/kiqreis.png"
          alt="profile photo"
        />

        <strong>Jurandir</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <button>
          <PencilSimpleLine size={20} />
          Edit your profile
        </button>
      </footer>
    </aside>
  )
}