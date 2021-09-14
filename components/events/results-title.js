import styled from "styled-components";
import Button from "../ui/button";

function BasicResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={props.className}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

const ResultsTitle = styled(BasicResultsTitle)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;
`;

export default ResultsTitle;
