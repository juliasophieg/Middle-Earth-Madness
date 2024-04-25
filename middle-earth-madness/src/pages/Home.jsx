import Card from "../components/Card";
import styled from "@emotion/styled";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 10rem;
  width: calc(100vw - 20rem);
`;

function Home() {
  return (
    <>
      <CardsContainer>
        <Card categoryTitle="Books" categoryLink="/books"></Card>
        <Card categoryTitle="Movies" categoryLink="/movies"></Card>
        <Card categoryTitle="Characters" categoryLink="/characters"></Card>
      </CardsContainer>
    </>
  );
}

export default Home;
