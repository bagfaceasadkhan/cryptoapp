import React from "react";
import styled from "styled-components";
const CryptoCard = (props) => {
  return (
    <Container>
      <div className="all-container">
        <div className="image-container">
          <img src={props.data.icon} alt="" />
        </div>
        <div className="name-container">{props.data.name}</div>
        <div className="symbol-container">{props.data.symbol}</div>
        <div className="price">$ {Math.round(props.data.price)}</div>
        <div
          className="price-change"
          style={{
            color: props.data.priceChange1w > 0 ? "#37F713" : "#E7492A",
          }}
        >
          {props.data.priceChange1w}
        </div>
        <div className="market-cap">$ {Math.round(props.data.marketCap)}</div>
      </div>
      <div className="horzontal-line">
        <hr />
      </div>
    </Container>
  );
};

export default CryptoCard;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .horizontal-line {
    hr {
      width: 100%;

      color: white;
    }
  }
  .all-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .price-change {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-container {
      img {
        width: 50px;
        height: 50px;
      }
    }
    .symbol-container {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .price {
      width: 210px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .market-cap {
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .name-container {
      width: 100px;
      display: flex;
      font-weight: 500;
      align-items: center;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .all-container {
      margin-bottom: 5px;
      .price-change {
        font-size: 12px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .image-container {
        img {
          width: 30px;
          height: 30px;
        }
      }
      .symbol-container {
        width: 30px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .price {
        width: 60px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .market-cap {
        width: 120px;
        display: flex;
        font-size: 12px;
        align-items: center;
        justify-content: flex-end;
      }
      .name-container {
        width: 60px;
        display: flex;
        font-size: 12px;

        align-items: center;
      }
    }
  }
`;
