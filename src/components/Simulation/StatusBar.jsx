import {
  ContainerStyle,
  FillerStyles,
  LabelStyles,
  Name,
} from "./StatusBar.styled";

const StatusBar = (props) => {
  const {bgcolor, completed, name} = props;

  return (
    <div data-testid='name-and-bar'>
      <Name data-testid='name'>{name}</Name>
      <ContainerStyle data-testid='bar' bgcolor={bgcolor}>
        <FillerStyles
          width={100 - completed < 0 ? 0 : 100 - completed}
          bgcolor={bgcolor}>
          <LabelStyles>{`${
            100 - completed < 0 ? 0 : 100 - completed
          }`}</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
    </div>
  );
};

export default StatusBar;
