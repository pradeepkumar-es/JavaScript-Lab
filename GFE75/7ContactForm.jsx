/*
Building forms is a common task in front-end development. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

Requirements
The form should contain the following elements:
Name field.
Email field.
Message field. Since the message can be long, a <textarea> will be more suitable.
Submit button.
Contains the text "Send".
Clicking the submit button submits the form.
The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
There is no need to do any client-side validation on the fields. Validation will be done on the server side.
Submission API
Upon submission, POST the form data to https://questions.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

If all the form fields are correctly filled in, you will see an alert containing a success message. Congratulations!

Notes
You do not need JavaScript for this question; the focus is on HTML form validation and submission.

Hints
New
Hint 1: Let the form own submission
Use the form's action and method so the browser performs the POST without custom scripting. A submit button and Enter from a single-line field will then share the same submission path.

Hint 2: Name every successful control
Form submission serializes controls by their name attributes, so use the required request keys on the name, email, and message fields. Choose the control type that matches each value, including a multiline control for the message.

Hint 3: Keep labels and keyboard behavior native
Associate each visible label with its control through matching identifiers. Preserve the textarea's normal Enter behavior and avoid adding validation or event handlers that change the requested native form behavior.
*/
import submitForm from './submitForm';

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      method="POST"
      action ="https://questions.greatfrontend.com/api/questions/contact-form"
      >
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" name="name"  />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message: </label>
      <textarea id="message" rows="3" cols="29" name="message"/>
      <button type="submit" >Send</button>
    </form>
  );
}
