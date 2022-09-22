import styled from "styled-components";
import Popup from "reactjs-popup";

export const Title=styled.h1`
background-color:lightblue;
color:blueviolet;
width:auto;
justify-content: center;
text-align: center;
padding: 1%;
`

export const StyledButton=styled.button`
background-color: blueviolet;
border: none;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
padding: 1%;
border-radius: 6%;
`


export const StyleParentDiv=styled.div`
background-color:lightblue;
`

export const Select=styled.select`
float: right;
`

export const StyelChildDiv=styled.div`
display: inline;
padding-left: 30%;
border-right:3px solid lightsalmon;
border-top:3px solid burlywood;
text-align: center;
border-bottom:3px solid lightsalmon;
height: 300px;
box-sizing: border-box;
`

export const Lable=styled.label`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: black;
width: 10%;
background-color: ${(props)=>props.color};
`















// export const StyledButton=styled.button`
// background-color:${(props)=>(props.variant==='outline'?'#FFF':'#4caf50')};
// border:${(props)=>(props.variant==='outline'?'#4caf50':'#FFF')};
// padding:5%;
// /* pseuco */
// &:hover{
//   background-color:${(props)=>(props.variant!=='outline'?'#FFF':'#4caf50')};
// }
// `

// export const FancyButton=styled(StyledButton)`
// background-image: linear-gradient(to right, #f6d365 0%,#fda085 100%);`



// export const SubmitButton=styled(StyledButton).attrs({
//   type:'submit',
// })`
// box-shadow:0 9px #999;
// &:active{
//   background-color: ${(props)=>(props.variant!=='outline'?'#FFF':'#4caf50')};
//   box-shadow: :0 5px #666;
//   transform: translateY(4px);
// }`


// export const DarkButton=styled(StyledButton)`
// border:${props=>props.theme.dark.primary};
// color:${props=>props.theme.dark.text};`
