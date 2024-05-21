import styled from "styled-components"

export const CustomButton = styled.button`
color: black;
width: 200px;
border-radius: 20px;
background-color: white;
padding: 10px;
border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
&:hover{
    background-color:grey;
    transform: translateY(-5px);
}
`