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
      <ContainerStyle data-testid='bar'>
        <FillerStyles width={completed} bgcolor={bgcolor}>
          <LabelStyles>{`${completed}`}</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
    </div>
  );
};

export default StatusBar;
