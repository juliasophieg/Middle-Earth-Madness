import styled from "@emotion/styled";

const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 0.3rem;
  width: 250px;
  height: 300px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  background-color: #f3d3b6;
  border-radius: 0.3rem 0.3rem 0 0;
  height: 70%;
`;

function Card({ categoryLink, categoryImg, categoryTitle }) {
  return (
    <a href={categoryLink}>
      <CardElement>
        <ImgContainer>{categoryImg}</ImgContainer>
        <h2>{categoryTitle}</h2>
      </CardElement>
    </a>
  );
}

export default Card;
