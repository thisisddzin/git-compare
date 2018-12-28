import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 250px;
  margin: 10px;
  background: #fff;

  header {
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }

  button {
    height: 35px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

i {
  margin-right: 5px;
}

  .visit {
    height: 35px;
    font-size:14px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    background: dodgerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }

  .refresh {
    background: limegreen;
  }

  .remove {
    background: orangered;
  }
`;
