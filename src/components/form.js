import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const FormStyle = styled.div`
  display: flex;

  .name {
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
  }

  .email {
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
  }

  .message {
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
  }

  #buttonContainer {
    display: flex;
    justify-content: space-between;

    button:hover {
      background-color: #ccce5f;
    }
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

        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <div id="buttonContainer">
          <button type="submit" value="Send Message" className="special">
            send
          </button>
          <button type="reset" value="Clear">
            clear
          </button>
        </div>
      </form>
    </FormStyle>
  )
}
