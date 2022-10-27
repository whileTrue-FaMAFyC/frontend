import {
  ContainerStyle,
  FillerStyles,
  LabelStyles,
  Name,
} from "./StatusBar.styled";

const StatusBar = (props) => {
  const {bgcolor, completed, name} = props;

  return (
    <div>
      <Name>{name}</Name>
      <ContainerStyle>
        <FillerStyles width={completed} bgcolor={bgcolor}>
          <LabelStyles>{`${completed}`}</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
    </div>
  );
};

export default StatusBar;
