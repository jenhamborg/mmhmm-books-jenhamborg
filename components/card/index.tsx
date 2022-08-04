import Image from "next/image";
import styled from "styled-components";
import { IconButton } from "../iconButton";

const Card = ({ author, clickFunction, icon, id, image, paragraph, title }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image alt={title} src={image} height={200} width={125} />
      </ImageContainer>
      <CardContent>
        <h2>{title}</h2>
        <div>
          <div className="card-subtitle">{author}</div>
          <p>{paragraph}</p>
        </div>
      </CardContent>
      <div className="card-icon-button">
        <IconButton onClick={() => clickFunction(id)}>{icon}</IconButton>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 51px 80px rgba(0, 0, 0, 0.04),
    0px 21.3066px 33.4221px rgba(0, 0, 0, 0.0287542),
    0px 11.3915px 17.869px rgba(0, 0, 0, 0.0238443),
    0px 6.38599px 10.0172px rgba(0, 0, 0, 0.02),
    0px 3.39155px 5.32008px rgba(0, 0, 0, 0.0161557),
    0px 1.4113px 2.21381px rgba(0, 0, 0, 0.0112458);
  color: #000000;
  display: flex;
  height: 230px;
  padding: 15px;
  width: 601px;
  .card-icon-button {
    display: flex;
    justify-content: flex-end;
    min-width: 50px;
  }
  h2 {
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
`;

const CardContent = styled.div`
  line-height: 150%;
  padding-left: 15px;
  width: 393px;
  .card-subtitle {
    color: #5f5f5f;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 18px;
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 125px;
`;
