import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Home() {
  const items = useSelector((state) => state.todo);
  return (
    <Container>
      <h1>Главная страница</h1>
      <p>У вас {items.length} незаконченных дел</p>
      <Link to="/todo">Посморите список дел</Link>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  text-align: center;
`;
