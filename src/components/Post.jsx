import styles from "./Post.module.css";

/* eslint-disable react/prop-types */
export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/kiqreis.png" alt="profile photo" />
            <div className={styles.authorInfo}>
              <strong>Kaique Reis</strong>
              <span>Backend Developer</span>
            </div>
          </div>

          <time title="November 28, 2024" dateTime="2024-11-28">Published 1 hour ago</time>
        </header>

        <div className={styles.content}>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. 👍</p>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis placerat netus; at facilisis imperdiet mattis.</p>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
          <p><a href="#">My projects</a></p>
        </div>
      </article>
    </>
  )
}