import styled from "styled-components";

export const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.625rem;
    font-weight: 700;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .page-content {
    max-width: 601px;
  }
  .header-content {
    align-items: center;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    min-width: 601px;
  }
`;
