import styled from "styled-components";
import FeaturePic from "../../Images/featurep.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))
,url(${FeaturePic});
  height: 25rem;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0, 2rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton= styled.button`
font-size: 1.4rem;
padding: 0.8rem, 4rem;
border:none;
border-radius: .5rem;
background: #ffc500;
color: #000;
transition: .2s ease-out;
cursor: pointer;
`
