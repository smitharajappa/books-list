import styled from "styled-components";

export const StyledBook = styled.div`
  padding: 12px 30px 40px 30px;

  .page_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .page_title {
      font-size: 35px;
      color: var(--black-color);
      font-weight: 700;
    }
    .create_button {
      background-color: var(--blue-color);
    }
  }
  .search {
    padding: 50px 0 10px 0;
    width: 100%;
    .wrapper {
      position: relative;

    .search_icon {
      height: 1.5rem;
      width: 1.5rem;
      padding: 4px;
      position: absolute;
      box-sizing: border-box;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      path {
        fill: var(--black-color)
      }
    }
    input {
      padding-left: 30px;
      width: 100%;
      outline: 0;
      border-width: 0 0 1px;
      border-color: rgb(136, 136, 136);
      background-color: var(--gray-color);

      &:focus {
        border-color: var(--blue-color-10);
        outline: 0;
      }
    }
  }
}

  .title_allBooks {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--blue-color-10);
  }
  .card_container {
    padding-top: 20px;
    .card {
      width: 100%;
      padding: 20px;
      border-left: 5px solid var(--orange-color);
      border-radius: 7px;
      .card_title {
        font-size: 16px;
        font-weight: 700;
        color: var(--blue-color-10);
        margin: 2px;
        padding: 0;
      }
      .card_text {
        font-size: 14px;
        font-weight: 400;
        color: var(--blue-color-10);
        padding: 0;
        margin: 0;
      }
    }
  }
`;
