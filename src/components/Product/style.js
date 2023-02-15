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
  max-width: 80%;
  @media screen and (max-width: 500px){
    padding: 10px 15px;
  }
`

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -50px;
  left: 25px;
  cursor: pointer;
  z-index: 200;
  transition: 700ms ease-in-out;
  :hover{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    backdrop-filter: blur(15px);
    border-radius: inherit;
    & img{
      width: 250px;
    }
  }
  img{
    width: 120px;
    position: relative;
    z-index: 200;
    border-radius: 5px;
  }
`

export const ProductHeader = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  z-index: 1;
  h1{
    max-width: 70%;
    word-wrap: wrap;
  }
`

export const ProductTypes = styled.div`
  display: flex;
  z-index: 1;
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
  z-index: 1;
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
  z-index: 1;
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
  z-index: 1;
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

export const ContactUs = styled.a`
  display: flex;
  margin: auto;
  width: fit-content;
  background: var(--color-secondary);
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  border-radius: 100px;
  margin-top: 5px;
  opacity: 0.8;
  :hover{
    opacity: 1;
  }
`