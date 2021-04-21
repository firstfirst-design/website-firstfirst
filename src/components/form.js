import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const FormStyle = styled.div`
  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
    width: 100%;
  }

  .input {
    padding-bottom: ${rhythm(1 / 2)};
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
  }

  .button {
    color: blue;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  button:hover {
    color: red;
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
            <h4>Name</h4>
          </label>
          <input type="text" name="name" className="input" />
        </div>

        <div className="field">
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
          <input type="text" name="email" className="input" />
        </div>

        <div className="field">
          <label htmlFor="message">
            <h4>Message</h4>
          </label>
          <textarea name="message" className="input" rows="3" />
        </div>
        <div className="buttonContainer">
          <button type="submit" value="Send Message" className="button">
            <h4>Send</h4>
          </button>
          <button type="reset" value="Clear" className="button">
            <h4>Clear</h4>
          </button>
        </div>
      </form>
    </FormStyle>
  )
}
