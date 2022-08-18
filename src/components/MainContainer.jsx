import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import CryptoList from "./CryptoList";
const MainContainer = () => {
  return (
    <Container>
      <SearchBar />
      <CryptoList />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
