import styled from 'styled-components'
import { breakPoints } from '../../utils/constants'

export const HeroWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 70px;
  > .left-side{
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    margin: 50px;
    position: relative;
    @media screen and (max-width: 550px){
      margin: 30px;
    }
  }
  .hero-buttons{
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 800px){
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .consult{
    display: flex;
    margin-top: 30px;
    border: solid 2px var(--color-main);
    padding: 3px;
    border-radius: 50px;
    input{
      border-radius: 50px 0 0 50px;
      width: 300px;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
      color: var(--text-color);
      font-family: inherit;
    }
    .consult-btn{
      background: rgb(31,66,32);
      background: linear-gradient(-90deg, rgba(31,66,32,1) 0%, rgba(53,122,56,1) 100%);        
      color: white;
      border: solid var(--color-main) 1px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 50px ;
      box-shadow: 2px 2px 5px gray;
      :hover{
        opacity: 0.8;
      }
    }
  }
  .contact-btn{
    padding: 20px 15px;
    font-size: 14px;
    margin-top: 30px;
  }
  .contact-btn_on{
    color: white;
    background: var(--color-secondary);
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0,0.5);
    :hover{
      background: red;
    }
  }
  .contact-btn_off{
    border: solid 1px var(--color-secondary);
    font-weight: bold;
    color: var(--color-secondary);
    :hover{
      color: white;
      background: var(--color-secondary);
    }
  }
  img{
    width: 500px;
    z-index: 1;
    @media ${breakPoints.xl}{
      width: 350px;
    }
    @media screen and (max-width: 805px){
      width: 250px;
    }
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    text-align: center;
    img{
      width: 100%;
    }
  }
  .contact-infos{
    .space{
      height: 10px;
    }
    &__container{
      box-shadow: 0 0 5px rgba(0, 0, 0,0.5);
      padding: 20px 30px;
      border-radius: 5px;
      background: linear-gradient(-125deg, var(--color-secondary) 90%, gray);
      color: white;
      display: flex;
      gap: 20px;
      .contact-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 30px;
        gap: 10px;
        border: solid 1px rgba(250, 250, 250, 0.3);
        border-radius: 5px;
        justify-content: flex-start;
        :last-child:hover{
          background: var(--color-main)
        }
      }
    }
    .contact-info__email:hover{
      background: blue;
    }
  }
  @media screen and (max-width: 550px) {
    margin-top: 150px;
  }
`