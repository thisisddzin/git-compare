import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  width: 100%;
  max-width: 400px;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.repositoryError ? '2px solid red' : 0)};
  }

  button {
    height: 55px;
    width: 80px;
    padding: 0 20px;
    background: #63f5b0;
    border: 0;
    margin-left: 10px;
    font-size: 20px;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #52d89f;
    }
  }
`;
