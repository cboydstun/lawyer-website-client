import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const ContactUs = () => {
    const [state, handleSubmit] = useForm("xwpejzay");
    if (state.succeeded) {
            return <p>Thank you for entering information in the contact form.</p>;
    }
    return (
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <div>
            <p>Contact Form for Clients</p>
          </div>
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        
        


      </form>
  )
}

export default ContactUs