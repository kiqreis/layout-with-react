import { format, formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import styles from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function Post(props) {
  const [comments, setComments] = useState([
    "Very nice, Devon! 👏🏽",
  ])

  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(props.publishedAt, "LLLL d 'at' hh:mm aaa")
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: enUS,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText("")
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

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

        <form onSubmit={handleCreateNewComment} className={styles.comments}>
          <strong>Leave your feedback</strong>

          <textarea
            name="comment"
            value={newCommentText}
            placeholder="Leave a comment"
            onChange={handleNewCommentChange}
          />

          <footer>
            <button type="submit">Publish</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment, index) => {
            // eslint-disable-next-line react/jsx-key
            return (<Comment key={index} content={comment} onDeleteComment={deleteComment} />)
          })}
        </div>
      </article>
    </>
  )
}