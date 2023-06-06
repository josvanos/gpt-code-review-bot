export const SubscribeToEmailModal = ({ onBlur, onSubcribe, onClose }) => {
  return (
    <>
      <h2> Sign Up + Save! </h2>
      <p>
        Sign up to our newsletter and get a <strong> exclusive </strong> coupon
        for 30% off your next order
      </p>
      <input type="email" onBlur={onBlur} />
      <button onClick={onSubcribe}> SIGN UP + GET COUPON </button>
      <button onClick={onClose}> Nah I like paying full price </button>
    </>
  );
};
