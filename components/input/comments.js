import { useState, useEffect, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import { NotificationContext } from "../../store/notification-context";
import styled from "styled-components";

function BasicComments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const notificationCtx = useContext(NotificationContext);
  const { showNotification } = notificationCtx;

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
          setLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API

    showNotification({
      title: "Adding Comment",
      message: "Adding a new comment",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.error || "Something went wrong");
        });
      })
      .then((data) => {
        showNotification({
          status: "success",
          title: "Successfully added",
          message: "Successfully added your comment",
        });
      })
      .catch((error) => {
        showNotification({
          status: "error",
          title: "Error",
          message: error.message || "Something went wrong",
        });
      });
  }

  return (
    <section className={props.className}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && loading ? (
        "Loading ..."
      ) : (
        <CommentList items={comments} />
      )}
    </section>
  );
}

const Comments = styled(BasicComments)`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;

  button {
    font: inherit;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #03be9f;
    border: 1px solid #03be9f;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: #dcfff9;
  }
`;

export default Comments;
