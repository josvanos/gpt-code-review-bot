export const CreateAccountModal = ({ onBlur, onSubcribe, onClose }) => {
  return (
    <>
      <h2> Sign Up! </h2>
      <form action="/sign-up">
        <input type="text" name="username" />
        <input id="consent" type="checkbox" name="consent" checked />
        <label htmlFor="consent">I agree with the terms and conditions</label>
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
};
