import Image from "next/image";

import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import styled from "styled-components";

const ItemList = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    object-fit: cover;
    height: 10rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    img {
      width: 40%;
      height: 14rem;
    }
  }
`;

const ItemContainer = styled.div`
  width: 60%;
  padding: 0;
  text-align: left;

  h2 {
    margin: 0.5rem 0;
  }

  time {
    color: #666666;
    font-weight: bold;
  }

  time {
    color: #666666;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 0;
    text-align: left;
    h2 {
      margin: 1rem 0;
    }
  }
`;

const ItemDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #666666;
  }

  time {
    color: #666666;
    font-weight: bold;
  }

  address {
    margin: 0.5rem 0;
    color: #666666;
    white-space: pre;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    display: block;
  }
  a span {
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const IconSpan = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <ItemList>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <ItemContainer>
        <div>
          <h2>{title}</h2>
          <ItemDiv>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </ItemDiv>
          <ItemDiv>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </ItemDiv>
        </div>
        <Action>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <IconSpan>
              <ArrowRightIcon />
            </IconSpan>
          </Button>
        </Action>
      </ItemContainer>
    </ItemList>
  );
}

export default EventItem;
