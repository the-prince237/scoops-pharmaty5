import styled from "styled-components";

export const StatItemWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .stat-item__header{
    display: flex;
    align-items: end;
    margin-bottom: 10px;
    div{
      text-align: left;
      display: flex;
      flex-direction: column;
    }
  }
  .item-icon{
    font-size: 80px;
    color: var(--color-secondary);
    margin-right: 5px;
  }
  h1, p{
    color: white;
  }
`