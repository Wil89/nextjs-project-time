import { useRef, useState } from "react";
import styled from "styled-components";

function BasicNewsletterRegistration({ handlerRegistration, className }) {
  //const emailRef = useRef();
  const [email, setEmail] = useState('');

  function registrationHandler(event) {
    event.preventDefault();
    //console.log(event);
    //const email = emailRef.current.value;
    // email validation regex
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email || !re.test(email)) {
      return;
    }
    //emailRef.current.value = "";
    handlerRegistration(email);
  }

  return (
    <div className={className}>
      <Section>
        <h2>Sign up to stay updated!</h2>
        <form onSubmit={registrationHandler}>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              data-testid="data-input"
              value={email}
              name="email"
              onChange={(event)=> setEmail(event.target.value)}
            />
            <button>Register</button>
          </div>
        </form>
      </Section>
    </div>
  );
}

const Section = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;
`;

const NewsletterRegistration = styled(BasicNewsletterRegistration)`
  h2: {
    text-align: center;
  }

  input {
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ccc;
    flex: 1;
  }

  button {
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font: inherit;
    cursor: pointer;
  }
  button:hover,
  button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }

  div {
    display: flex;
  }
`;

export default NewsletterRegistration;
