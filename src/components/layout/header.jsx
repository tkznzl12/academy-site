import styled from "styled-components";
import Logo from "../../assets/img/logo.png";
const HeaderComponent = styled.div`
  display: flex;
  padding: 1.87vw;
  gap: 5vw;
  .logo {
    width: 210px;
    img {
      width: 100%;
    }
  }
  ul {
    display: flex;
  }
  li {
    width: 7.81vw;
    list-style: none;
    font-size: 1.09vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li>강의 소개</li>
          <li>수강 후기</li>
          <li>블로그</li>
          <li>연락/문의</li>
        </ul>
      </HeaderComponent>
    </>
  );
};

export default Header;
