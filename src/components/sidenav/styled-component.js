import styled from "styled-components";

export const StyledSideNav = styled.div`
  z-index: 700;
  display: flex;
  flex-direction: row;
  .sidenav {
    position: fixed;
    transition: width 0.3s ease-in-out;
    height: 100vh;
    background-color: var(--white-color);
    box-shadow: 3px 0 #d7dce4;
    font-size: 20px;
    svg {
      width: 20px;
      height: 20px;
    }
    .sidenav_open {
      width: 250px;
    }
    .sidenav_closed {
      width: 60px;
      span {
        display: none;
      }
      .link_text {
        display: none;
      }
    }

    .side_item {
      display: flex;
      /* align-items: center; */
      padding: 20px;
      cursor: pointer;
      color: var(--gray-color-10);
      text-decoration: none;
      overflow: hidden;
      svg path {
        fill: var(--gray-color-10);
      }
      &:hover {
        background-color: var(--blue-color);
        color: var(--white-color);
        svg path {
          fill: var(--white-color);
        }
      }
      &:focus-visible {
        background-color: var(--blue-color);
        color: var(--white-color);
        svg path {
          fill: var(--white-color);
        }
      }
      &:active {
        background-color: var(--blue-color);
        color: var(--white-color);
        svg path {
          fill: var(--white-color);
        }
      }
    }
    .link_text {
      padding-left: 16px;
      font-size: 12px;
      text-transform: uppercase;
    }

    .menu_button {
      display: flex;
      width: 100%;
      color: var(--gray-color-10);
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 20px 20px 10px 20px;
      .menu_text {
        font-size: 12px;
        padding-left: 16px;
        text-transform: uppercase;
      }
      svg path {
        fill: var(--gray-color-10);
      }
    }
  }
`;
