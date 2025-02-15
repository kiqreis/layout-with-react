import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

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

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}