import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const Headerbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 48px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`;

const Div = styled.div`
  margin: 0 80px;
`;

function Header() {
  return (
    <Headerbar>
      <Div>
        <h1>Where in the world?</h1>
      </Div>
      <Div>
        <DarkModeToggle />
      </Div>
    </Headerbar>
  );
}

export default Header;
