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
  ]);

  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(props.publishedAt, "LLLL d 'at' hh:mm aaa")
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: enUS,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function handleInvalidComment(event) {
    event.target.setCustomValidity("The field cannot be empty!");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
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
          {props.content.map((line, index) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>
            } else if (line.type === "link") {
              return (<p key={index}>
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
            placeholder="Leave a comment"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleInvalidComment}
            required
          />

          <footer>
            <button type="submit" disabled={newCommentText.length === 0}>Publish</button>
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