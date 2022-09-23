import styled from "styled-components";

export const StyelDivContainer = styled.div`
display:flex;
flex-direction: row;
  margin: auto;
  width: 100%;
  margin-left: 100px;

`;
export const StyleDivList = styled.div`
  border: 3px solid ${(props) => props.color};
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  width: 250px;
  height: 500px;
  margin-left: 100px;
`;

export const StyleHeading = styled.div`
  background-color: ${(props) => props.color};
`;
export const StyleCard = styled.div`
  margin: 5%;
  margin-left: 15%;
  width: 80px;
  max-width: 80px;
  /* height: 90%; */
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
