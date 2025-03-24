import styled from "styled-components";

const Landing = () => {
  return (
    <div>
      <Button>Click me</Button>
      <h1>Landing Page</h1>
    </div>
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
