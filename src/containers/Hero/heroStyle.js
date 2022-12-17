import styled from 'styled-components'
import { breakPoints } from '../../utils/constants'

export const HeroWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  > .left-side{
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
  }
  .hero-buttons{
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    > span{
      :first-child{
        border: solid var(--color-secondary) 1px;
        color: var(--color-secondary);
        :hover{
          color: white;
          background: var(--color-secondary);
        }
      }
      :last-child{
        background: rgb(31,66,32);
        background: linear-gradient(-90deg, rgba(31,66,32,1) 0%, rgba(53,122,56,1) 100%);        
        color: white;
        border: solid var(--color-main) 1px;
        opacity: 1;
        :hover{
          opacity: 0.8;
        }
      }
    }
  }
  img{
    width: 500px;
    @media ${breakPoints.xl}{
      width: 350px;
    }
    @media screen and (max-width: 805px){
      width: 250px;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    text-align: center;
    img{
      width: 100%;
    }
  }
`