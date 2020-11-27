const Button = function({ callback, param, label = param }) {
  return (
    <button onClick={() => callback(param)} dangerouslySetInnerHTML={{ __html: label }}></button>
  );
};

export default Button;
