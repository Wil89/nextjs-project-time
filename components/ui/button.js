import Link from "next/link";
import styled from "styled-components";

function BasicButton(props) {
  if (props.link) {
    return (
      <div className={props.className}>
        <Link href={props.link}>
          <a>{props.children}</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={props.className}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
}

const Button = styled(BasicButton)`
  a,
  button {
    text-decoration: none;
    cursor: pointer;
    font: inherit;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    padding: 0.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  }

  a,
  button:hover {
    background-color: #02afa1;
    border-color: #02afa1;
  }

  a,
  button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

export default Button;
