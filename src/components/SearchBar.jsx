import React from "react";

import styled from "styled-components";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useContext } from "react";
import { SearchContext } from "../helper/Contexts";
const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <Container>
      <div className="searchbar-section-title">WELCOME TO BAGFACEAKCRYPTO</div>
      <div className="searchbar-section-input">
        <input
          type="text"
          placeholder="SEARCH FOR CRYPTO"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <button
          onClick={() => {
            setSearchValue("");
          }}
        >
          <RestartAltIcon fontSize="large" />
        </button>
      </div>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  .searchbar-section-title {
    font-size: 30px;
    font-weight: 500;
  }
  .searchbar-section-input {
    margin-top: 30px;
    display: flex;
    align-items: center;
    input[type="text"] {
      width: 300px;
      ::placeholder {
        color: white;
        margin-left: 10px;
      }
      height: 40px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #33a4a0;
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    .searchbar-section-title {
      font-size: 20px;
      font-weight: 500;
    }
    .searchbar-section-input {
      margin-top: 30px;
      display: flex;
      align-items: center;
      input[type="text"] {
        width: 200px;

        height: 30px;

        font-size: 10px;
      }
      button {
        border: none;
        * {
          font-size: 1rem;
        }
      }
    }
  }
`;
