import styled from 'styled-components'

export const SpecWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  > p{
    text-align: center;
  }
  .specialities{
    width: 100%;
    margin-top: 30px;
  }
`

export const SpecNav = styled.nav`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  overflow: auto;
`

export const SpecLink = styled.span`
  border:${({isActive}) => isActive ? `unset` : "solid 2px gray"};
  color: ${({isActive}) => isActive ? "white" : "gray"};
  background: ${({isActive}) => isActive ? "var(--color-secondary)" : "unset"};
  padding: 5px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  & .spec-link__text{
    @media screen and (max-width: 600px){
      display: none;
    }
  }
  & .spec-link__icon{
    display: none;
    @media screen and (max-width: 600px){
      display: inline;
    }
  }
  :hover{
    border: ${({isActive}) => isActive ? "unset" : "solid 2px var(--color-secondary)"};
    color: ${({isActive}) => !isActive && " var(--color-secondary)"};
  }
  
`

export const SpecDots = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const SpecDot = styled.div`
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 5px;
  border:${({isActive}) => isActive ? `solid 2px var(--color-secondary)` : "solid 2px gray"};
  background: ${({isActive}) => isActive ? "var(--color-secondary)" : "unset"};
`