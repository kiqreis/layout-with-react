import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Eliza&backgroundColor=ffd5dc&accessories=round&accessoriesProbability=100&eyebrows=upDown&eyes=squint"
        alt="profile photo"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Jurema</strong>
              <time title="December 2, 2024 at 6:40pm" dateTime="2024-12-2">About 3 hours ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very nice, Devon! 👏🏽</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>27</span>
          </button>
        </footer>
      </div>
    </div>
  )
}