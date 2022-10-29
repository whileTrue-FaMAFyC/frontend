import {Robot} from "./Board.style";
import {ReactComponent as Bot} from "./robot-line.svg";

export const Board = (props) => {
  const {name, coordinates} = props;

  return (
    <div>
      {coordinates.map((c, idx) => (
        <div>
          <label for={idx}>{name}</label>
          <Robot id={idx} coordinates={c} name={name}>
            <Bot />
          </Robot>
        </div>
      ))}
    </div>
  );
};
