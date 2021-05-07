import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const FormStyle = styled.div`
  h3 {
    margin-bottom: ${rhythm(1 / 8)};
  }

  #form {
    margin-bottom: ${rhythm(0)};
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
    width: 100%;
  }

  .input {
    padding-bottom: ${rhythm(1 / 8)};
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
  }

  .button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: blue;
    text-decoration-thickness: ${rhythm(1 / 8)};
    text-underline-offset: ${rhythm(1 / 16)};
    outline: none;
  }

  button:hover {
    text-decoration-color: red;
  }
`

export default function Form() {
  return (
    <FormStyle>
      <form
        id="form"
        name="Form"
        method="POST"
        data-netlify="true"
        action="/message-success"
      >
        <input type="hidden" name="form-name" value="Form" />

        <div className="field">
          <label htmlFor="name">
            <h3>Name</h3>
          </label>
          <input type="text" name="name" className="input" />
        </div>

        <div className="field">
          <label htmlFor="email">
            <h3>Email</h3>
          </label>
          <input type="text" name="email" className="input" />
        </div>

        <div className="field">
          <label htmlFor="message">
            <h3>Message</h3>
          </label>
          <textarea name="message" className="input" rows="8" />
        </div>
        <div className="buttonContainer">
          <button type="submit" value="Send Message" className="button">
            <h3>Send</h3>
          </button>
          <button type="reset" value="Clear" className="button">
            <h3>Clear</h3>
          </button>
        </div>
      </form>
    </FormStyle>
  )
}
