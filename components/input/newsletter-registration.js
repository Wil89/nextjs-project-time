import classes from "./newsletter-registration.module.css";
import { useRef } from "react";

function NewsletterRegistration({ handlerRegistration }) {
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    // email validation regex
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email || !re.test(email)) {
      return;
    }
    emailRef.current.value = "";
    handlerRegistration(email);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
