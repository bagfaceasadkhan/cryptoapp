import React from "react";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../helper/Contexts";
import CryptoCard from "./CryptoCard";
const CryptoList = () => {
  const { searchValue } = useContext(SearchContext);
  const [coinArray, setCoinArray] = useState([]);
  useEffect(() => {
    const fetchAllCoins = async () => {
      const resp = await fetch(
        "https://api.coinstats.app/public/v1/coins?&currency=USD"
      );
      const data = await resp.json();
      console.log(data.coins);
      setCoinArray(data.coins);
    };
    fetchAllCoins();
  }, []);

  const filterCoins = coinArray.filter((val) => {
    return val.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <Container>
      {filterCoins.map((val) => (
        <CryptoCard data={val} />
      ))}
    </Container>
  );
};

export default CryptoList;
const Container = styled.div`
  width: 850px;
  margin-top: 50px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
