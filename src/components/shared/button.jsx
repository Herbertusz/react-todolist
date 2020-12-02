import { Html } from './utility';

const Button = function({ callback, param, label = param }) {
  return (
    <button onClick={() => callback(param)}><Html>{label}</Html></button>
  );
};

export default Button;
