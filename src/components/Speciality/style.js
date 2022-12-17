import styled from "styled-components";
import { breakPoints } from "../../utils/constants";

export const SpecialityWrapper = styled.div`
  width: 100%;
  filter: grayscale(0.5);
  display: flex;
  margin-bottom: 50px;
  border-radius: 20px;
  cursor: pointer;
  background: linear-gradient(145deg, white 50%, ${({color}) => color});
  img{
    width: 100%;
    max-width: 500px;
    border-radius: 0 20px 20px 0;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3);
    object-fit: cover;
  }
  :hover{
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    filter: grayscale(0);
  }
  @media ${breakPoints.xl} {
    img{
      max-width: 350px;
    }
  }
  @media ${breakPoints.lg} {
    img{
      max-width: 250px;
    }
  }
  @media ${breakPoints.md} {
    flex-direction: column;
    background: linear-gradient(145deg, white, ${({color}) => color} 30%);
    align-items: center;
    padding: 10px;
    >div>div>h1{
      color: white;
    }
    img{
      display: none;
    }
  }
`

export const SpecBody = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SpecHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-bottom: 3px;
  border-bottom: solid 1px rgba(250, 250, 250, 0.1);
  h1{
    color: ${({color}) => color};
    opacity: 0.6;
  }
  .icon{
    color: ${({color}) => color};
    font-size: 2rem;
  }
`

export const SpecDescription = styled.div`
  display: flex;
  margin-bottom: 20px;
  div{
    width: 5px;
    height: 60px;
    margin-right: 5px;
    border-radius: 5px;
    background: linear-gradient(180deg, ${({color}) => color}, rgba(250, 250, 250, 0.3) 80%)
  }
  p{
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
`

export const SpecFooter = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  border: gray solid 1px;
  > div{
    border-right: solid 1px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 100%;
    :last-child{
      border: none;
    }
  }
`