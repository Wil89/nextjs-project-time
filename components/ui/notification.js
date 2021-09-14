import { useContext } from "react";
import styled from "styled-components";

import { NotificationContext } from "../../store/notification-context";

function BasicNotification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { hideNotification } = notificationCtx;

  const { title, message, status } = props;

  return (
    <div className={props.className} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

const Notification = styled(BasicNotification)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  background-color: ${(props) =>
    props.status === "pending"
      ? "#177cbe"
      : props.status === "success"
      ? "#10be58"
      : "#e65035"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: white;
  }
`;

export default Notification;
