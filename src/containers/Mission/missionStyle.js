import styled from "styled-components";

export const MissionWrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Statistics = styled.div`
  display: flex;
  background: linear-gradient(118deg, rgba(34,34,34,1) 0%, rgba(68,68,68,1) 100%); 
  box-shadow: 0 0 20px var(--color-secondary);
  border-radius: 20px;
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  overflow: hidden;
  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`