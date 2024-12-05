import {format, formatDistanceToNow} from "date-fns";
import {enUS} from "date-fns/locale";
import styles from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

/* eslint-disable react/prop-types */
export function Post(props) {
  const publishedDateFormatted = format(props.publishedAt, "LLLL d 'at' hh:mm aaa")
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: enUS,
    addSuffix: true
  })

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar
              hasBorder
              src={props.author.avatarUrl}
              alt="profile photo"
            />

            <div className={styles.authorInfo}>
              <strong>{props.author.name}</strong>
              <span>{props.author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={props.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {props.content.map(line => {
            if (line.type === "paragraph") {
              return <p key={props.key}>{line.content}</p>
            } else if (line.type === "link") {
              return (<p key={props.key}>
                <a href="https://github.com/kiqreis?tab=repositories" target="_blank">
                  {line.content}
                </a>
              </p>)
            }
          })}
        </div>

        <form className={styles.comments}>
          <strong>Leave your feedback</strong>

          <textarea
            placeholder="Leave a comment"
          />

          <footer>
            <button type="submit">Publish</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </article>
    </>
  )
}