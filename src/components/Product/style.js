import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-top: 80px;
  padding: 10px 25px;
  width: 400px;
  border-radius: 10px;
  background: linear-gradient(145deg, #111, #222, #333, #555, #666);
  position: relative;
  border-bottom: green solid 3px;
  color: white;
  @media screen and (max-width: 500px){
    width: 300px;
  }
`

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #333;
  background: white;
  width: 150px;
  height: 150px;
  position: absolute;
  top: -50px;
  left: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 75px;
`

export const ProductHeader = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  h1{
    max-width: 70%;
    word-wrap: wrap;
  }
`

export const ProductTypes = styled.div`
  display: flex;
  span{
    padding-left:5px;
    margin-left: 5px;
    text-align: right;
    border-left: solid 1px rgba(250, 250, 250, 0.5);
    font-weight: bold;
    font-size: 12px;
    color: var(--color-main);
    :first-child{
      border-left: unset;
    }
  }
`

export const ProductBody = styled.div`
  margin-top: 65px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .description{
    display: flex;
    width: 100%;
    p{
      color: #fff;
      opacity: 0.8;
    }
    .icon{
      width: 50px;
      height: 20px;
      line-height: 20px;
      max-height: 30px;
      border-radius: 100%;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(145deg, green, var(--color-main), rgba(0, 0, 0, 0.3));
    }
  }
`

export const ToTreats = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: solid 1px rgba(250, 250, 250, 0.2);
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: var(--color-main);
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: linear-gradient(-145deg, white, white, rgba(0, 0, 0, 0.5));
  }
  .items{
    display: flex;
    justify-content: space-start;
    gap: 10px;
    flex-wrap: wrap;
    span{
      background: var(--color-main);
      padding: 5px 15px;
      border-radius: 20px;
      :last-child{
        background: white; 
        color: var(--color-main);
        font-weight: bold;
        font-size: unset;
      }
    }
  }
`

export const ProductFooter = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .items{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    span{
      color: var(--color-main);
      background: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
      :last-child{
        background: var(--color-main); 
        color: white;
        font-weight: bold;
        font-size: unset;
      }
    }
  }
`