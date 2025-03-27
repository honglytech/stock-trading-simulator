import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1>Logo</h1>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Stock Trading <span>Simulator</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            adipisci architecto numquam ad eaque commodi alias nihil voluptate
            omnis voluptates itaque soluta, fugit veniam quos, officia quasi
            assumenda suscipit! Deserunt?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
`;
export default Landing;
