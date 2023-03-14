import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;

`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 20px;
  background-color: #5e6c84;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const ContactNumber = styled.p`
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* padding: 10px; */
  /* margin-bottom: 10px; */
  background-color: #f4f5f7;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #c82333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 16px;
`;

export const ContactForm = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 0 20px 0 20px;
  margin-bottom: 10px;
  height: 50px;
`;
// export const ContactFormStyle = styled.li`
//   margin: 0;
// `;

