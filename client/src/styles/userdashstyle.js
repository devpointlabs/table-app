import styled from 'styled-components';

export const UserCard = styled.div`
  max-width: 200px;
  padding-bottom: 30px;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding-top: 190px;
  margin-left: 20px;
  display: flex;
`;

// I didnt know this would work but it did and i did it all by my self and i am very proud and nobody helped me and its super cool, wow good job joe
export const Line = styled.div(
  props => props.vertical ? 
  `
  border-left: 1px solid #363636;
  height: 100vh;
  margin: auto;
  ` :
  `
  border-top: 1px solid #363636;
  width 90%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  `
);

export const DashContent = styled.div`
  width: 1050px;
  height: 100vh;
  text-align: center;
  align-items: center;
`;

export const TicketHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #313131;
  padding: auto;
`;