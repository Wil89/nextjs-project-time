import { Fragment, useContext } from "react";
import { NotificationContext } from "../../store/notification-context";
import Notification from "../ui/notification";
import MainHeader from "./main-header";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const { notification } = notificationCtx;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {notification && <Notification {...notification} />}
    </Fragment>
  );
}

export default Layout;
