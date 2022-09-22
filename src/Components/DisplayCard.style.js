import styled from "styled-components";

export const StyelDivContainer = styled.div`
  box-shadow: inset;
  height: 20%;
  border: none;
  margin: auto;
  padding-left: 10%;
  align-items: center;
  justify-content: center;
  /* color:lightslategrey */
`;
export const StyleDivList = styled(StyelDivContainer)`
  border: 3px solid ${(props) => props.color};
  padding-left: 0%;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  display: inline-block;
  width: 25%;
  max-width: 25%;
  height: 30%;
  max-height: 30%;
  margin: 5px;
  position: static;

  /* position: relative; */
bottom: 0;
`;
export const StyleHeading = styled.div`
  background-color: ${(props) => props.color};
`;
export const StyleCard = styled(StyleHeading)`
  margin: 5%;
  margin-left: 15%;
  width: 80px;
  max-width: 80px;
  height: 90%;
  /* position: absolute; */
  background-color: whitesmoke;
`;
export const StyleCardText = styled.h5`
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: lightcoral;
  border-radius: 5%;
  width: 170px;
  max-width: 170px;
  height:70px;
  max-height: 70px;
  overflow: hidden;
  word-wrap: break-word;
  margin: 5%;
  -webkit-line-clamp: 2; 
   -webkit-box-orient: vertical;
`;
