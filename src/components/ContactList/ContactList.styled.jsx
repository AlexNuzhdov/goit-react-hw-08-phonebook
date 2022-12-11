import styled from 'styled-components';


export const Li = styled.li `
list-style:none;
display: flex;

justify-content: space-between;
width: 300px;
&:not(:last-child) {
margin-bottom: 10px;

`
export const Ul = styled.ul`
padding:0;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 530px;


`
export const Button = styled.button`
 background-color: #527c82;
 border: none;
 padding: 5px 5px;
 font-size: 14px;
 border-radius: 3px;

`