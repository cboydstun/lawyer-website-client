import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input, Button } from "react-daisyui";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xwpejzay");
  if (state.succeeded) {
    return <p>Thank you for entering information in the contact form.</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col flex gap-2 w-40 justify-center items-center mx-auto"
    >
      <br />
      <label htmlFor="email">
        <div>
          <p>Contact Form for the Clients</p>
          <br />
        </div>
        <p>Email Address</p>
      </label>

      <Input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" color="primary" disabled={state.submitting}>
        Submit
      </Button>
      <br />
    </form>
  );
};

export default ContactUs;
