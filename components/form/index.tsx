import { ChangeEvent, FormEvent } from "react";
import { FormPageWrapper } from "../layout/formPageWrapper";
import { Button } from "../button";
import { IconButton } from "../iconButton";
import styled from "styled-components";

type Form = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  formData: {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
  };
  icon: React.ReactNode;
  iconFunction: () => void;
  submit: (e: FormEvent<HTMLInputElement>) => void;
};

const Form = ({ handleChange, formData, icon, iconFunction, submit }: Form) => {
  return (
    <FormPageWrapper>
      <div className="header-content">
        <h1>Add a new book</h1>
        <IconButton onClick={iconFunction}>{icon}</IconButton>
      </div>
      <FormContainer onSubmit={(e) => submit(e)}>
        <label>
          Title
          <input
            name="title"
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.title}
          />
        </label>
        <label>
          Author
          <input
            name="author"
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.author}
          />
        </label>
        <label>
          Description
          <textarea name="description" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Image URL
          <input
            name="imageUrl"
            onChange={(e) => handleChange(e)}
            type="text"
            value={formData.imageUrl}
          />
        </label>
        <div className="form-button-container">
          <Button type="submit">Save</Button>
        </div>
      </FormContainer>
    </FormPageWrapper>
  );
};

export default Form;

const FormContainer = styled.form`
  min-width: 601px;
  .form-button-container {
    margin-left: 15px;
  }
  label {
    font-size: 0.875rem;
    font-weight: 700;
    margin-left: 15px;
    width: 100%;
  }
  input {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
    height: 50px;
    margin: 10px 15px 50px 15px;
    padding: 5px 10px;
    width: 90%;
  }
  textarea {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
    height: 107px;
    margin: 10px 15px 30px 15px;
    width: 90%;
  }
`;
