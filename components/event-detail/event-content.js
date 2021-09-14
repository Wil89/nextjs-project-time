import styled from "styled-components";

function BasicEventContent(props) {
  return <section className={props.className}>{props.children}</section>;
}

const EventContent = styled(BasicEventContent)`
  font-size: 1.5rem;
  color: #3a3a3a;
  width: 90%;
  max-width: 40em;
  margin: auto;
  margin-top: 8rem;
  text-align: center;
`;

export default EventContent;
