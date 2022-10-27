import {ContainerStyle, FillerStyles, LabelStyles} from "./StatusBar.styled";

const ProgressBar = (props) => {
  const {bgcolor, completed} = props;

  return (
    <ContainerStyle>
      <FillerStyles width={completed} bgcolor={bgcolor}>
        <LabelStyles>{`${completed}`}</LabelStyles>
      </FillerStyles>
    </ContainerStyle>
  );
};

export default ProgressBar;
