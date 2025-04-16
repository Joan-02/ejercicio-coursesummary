import "./Button.css";

export const Button = ({ text, variant = "primary" }) => {
  let buttonClass = "btn--secondary";
  if (variant === "secondary") {
    buttonClass = "btn--secondary";
  }

  if (variant === "primary") {
    buttonClass = "btn";
  }

  return <button className={`btn ${buttonClass}`}>{text}</button>;
};
