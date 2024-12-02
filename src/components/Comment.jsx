import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/kiqreis.png" alt="profile photo"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Kaique Reis</strong>
              <time title="December 2, 2024 at 6:40pm" dateTime="2024-12-2">About 3 hours ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={20}/>
            </button>
          </header>
          <p>Very nice, Devon! 👏🏽</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Applaud <span>27</span>
          </button>
        </footer>
      </div>
    </div>
  )
}