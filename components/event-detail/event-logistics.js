import Image from "next/image";
import styled from "styled-components";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";

function BasicEventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={props.className}>
      <div>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

const EventLogistics = styled(BasicEventLogistics)`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #2b2b2b;
  padding: 2rem;
  max-width: 50rem;
  width: 80%;
  margin: -3rem auto;
  color: #d5eeeb;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  > div {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid white;

    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    }
  }

  ul {
    flex: 3;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  address {
    white-space: pre;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    margin: -5rem auto;
    gap: 3rem;
    flex-direction: row;
    align-items: stretch;

    > div {
      width: 20rem;
      height: 20rem;

      img {
        width: 20rem;
        height: 20rem;
      }
    }

    ul {
      align-items: flex-start;
    }
  }
`;

export default EventLogistics;
