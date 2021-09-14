import styled from "styled-components";

const SpanIcon = styled.span`
  margin-right: 1rem;
  color: #18e0d0;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

function BasicLogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={props.className}>
      <SpanIcon>
        <Icon />
      </SpanIcon>
      <span>{props.children}</span>
    </li>
  );
}

const LogisticsItem = styled(BasicLogisticsItem)`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #aefff8;

  span {
    display: block;
  }
`;

export default LogisticsItem;
