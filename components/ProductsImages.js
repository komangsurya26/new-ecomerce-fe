import { useState } from "react";
import { styled } from "styled-components";

const Images = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

const ImagesButton = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImagesButtons = styled.div`
  border: 1px solid #ccc;
  ${(props) =>
    props.active
      ? `
border-color: red;`
      : `
border-color: transparent;
opacity: .5;`}
  background-color: #ccc;
  border-radius: 10px;
  height: 45px;
  cursor: pointer;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductsImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImagesButton>
        {images.map((image) => (
          <ImagesButtons
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Images src={image} alt="/"></Images>
          </ImagesButtons>
        ))}
      </ImagesButton>
    </>
  );
}
