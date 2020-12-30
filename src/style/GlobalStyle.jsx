import { createGlobalStyle } from 'styled-components';
import Jadyn from './JadynMaria.ttf'


export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Jadyn';
  src: url(${Jadyn}) format('truetype');
}
* {
  box-sizing: border-box;
}
body {
  width: 1024px;
  padding: 0 10px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #FBF6EA;
}
h1 {
  text-align: center;
}
.content {
  display: flex;
  flex-flow: row wrap;
  padding-top: 120px;
}
.content:not(:last-child) {
  margin-right: 20px;
}
h2 {
  border-bottom: 1px solid #aaa;
}
`;
