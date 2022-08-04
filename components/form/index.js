import styled from "styled-components";
import { PageWrapper } from "../layout/pageWrapper";
import { IconButton } from "../iconButton";

const Form = ({ icon }) => {
  return (
    <PageWrapper>
      <div className="header-content">
        <h1>Add a new book</h1>
        <IconButton onClick={() => clickFunction(id)}>{icon}</IconButton>
      </div>
    </PageWrapper>
  );
};

export default Form;
