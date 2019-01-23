import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15% auto 10% auto;
`

export const ViewDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`

export const Img = styled.img`
  min-width: 50%;
  min-height: 50%;
  max-width: 30%;
  min-height: 30%;
`

export const H1 = styled.p`
  font-size: 2rem;
`

export const EditDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #aaa;
  width: 50px;
  height: 50px;
`


export const EditCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #333;
  border-radius: 10px;
  margin-left: 5%;
  padding: 1%;
  width: 60%;
`
export const FormUpload = styled.div`
  display: flex;
  align-items: center;
`

export const UploadText = styled.p`
  width: 50%
  margin: 40% auto 0 auto
  font-size: 1.2rem
`

export const FormDiv = styled.div`
  border: 1px solid #aaa;
  border-radius: 10px;
  width: 100%
  padding: 10% 8%;
  margin: auto 10% auto 10%;
`

// @media (max-width: 700px) {
//   background: palevioletred;
// }