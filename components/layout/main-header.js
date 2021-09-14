import Link from "next/link";
import styled from "styled-components";

function BasicMainHeader({ className }) {
  return (
    <div className={className}>
      <header>
        <Logo>
          <Link href="/">NextEvents</Link>
        </Logo>
        <Navigation>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </Navigation>
      </header>
    </div>
  );
}

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;

  a {
    text-decoration: none;
    color: #94fdfd;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: #74dacc;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MainHeader = styled(BasicMainHeader)`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 10%;
    height: 5rem;
    background-color: #202020;
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 2.5rem;
    }

    .navigation a {
      font-size: 1.5rem;
    }
  }
`;

export default MainHeader;
