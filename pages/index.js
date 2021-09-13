import Head from "next/head";
import { useContext } from "react";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { NotificationContext } from "../store/notification-context";

function HomePage(props) {
  const notificationCtx = useContext(NotificationContext);

  const { showNotification, hideNotification } = notificationCtx;

  const handleRegistration = (email) => {
    const data = { email };
    showNotification({
      title: `Singing up...`,
      message: "Please wait",
      status: "pending",
    });
    fetch("/api/subscriptions", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        showNotification({
          status: "success",
          title: "Success",
          message: "Successfully registered",
        });
      })
      .catch((error) => {
        showNotification({
          status: "error",
          title: "Error",
          message: error.message || "Something went wrong",
        });
      });
  };

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration handlerRegistration={handleRegistration} />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
