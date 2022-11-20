import {
  StyledButton,
  StyledEntryCard,
  StyledInput,
  StyledInputGroup,
  EntryPage,
  StyledSuccess,
  StyledError,
  Div,
} from "./Botsubmit.styled";
import {CircularProgress} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const BotsubmitView = ({
  register,
  handleSubmit,
  success,
  failure_data,
  imgAvatar,
  setFile_cod,
  setFileName_cod,
  setFile_av,
  loading,
}) => {
  return (
    <EntryPage>
      <StyledEntryCard>
        <h2 style={{color: "white"}}>BOT SUBMIT</h2>
        <form
          onSubmit={handleSubmit(submitForm)}
          className='requires-validation'>
          <StyledInputGroup>
            <label className='form-content' htmlFor='name'>
              Name
            </label>
            <StyledInput
              autoComplete='off'
              id='name'
              type='text'
              {...register("name", {
                required: true,
                maxLength: 40,
                pattern: /^[A-Za-z0-9 ]+$/i,
              })}
            />
            {errors.name?.type === "required" ? (
              <StyledError role='no_name'>Name is required</StyledError>
            ) : null}
            {errors.name?.type === "maxLength" ? (
              <StyledError role='invalid_name_size'>
                Bot's name must have less than 40 characters
              </StyledError>
            ) : null}
            {errors.name?.type === "pattern" ? (
              <StyledError role='invalid_name'>
                Special characters are not allowed
              </StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledInputGroup className='hide-if-value'>
            <label className='form-content' htmlFor='source_code'>
              Code
            </label>
            <StyledInput
              autoComplete='off'
              id='source_code'
              type='file'
              accept='.py'
              {...register("source_code", {
                onChange: (t) => {
                  onUploadFileChange(t, setFile_cod, setFileName_cod);
                },
                validate: (e) => {
                  return (
                    e.length !== 0 &&
                    new RegExp(".*.py$").test(e[0].name) &&
                    e[0].size < 40000
                  );
                },
              })}
            />
            {errors.source_code?.type === "validate" ? (
              <StyledError role='invalid_code'>
                Insert .py file under 40 KB
              </StyledError>
            ) : null}
          </StyledInputGroup>

          <StyledInputGroup>
            <label className='form-content' htmlFor='avatar'>
              Avatar
            </label>
            <Avatar
              style={{
                height: 100,
                width: 100,
                verticalAlign: "middle",
                position: "relative",
                left: "124px",
                justifyContent: "center",
                bottom: "10px",
              }}
              spacing={2}
              src={imgAvatar}
            />
            <StyledInput
              autoComplete='off'
              id='avatar'
              type='file'
              accept='image/*'
              {...register("avatar", {
                onChange: (file) => {
                  onUploadFileChange(file, setFile_av, (e) => {
                    return e;
                  });
                  if (file?.target.files[0] !== undefined) {
                    onChangePicture(file);
                  } else {
                    setImgAvatar(null);
                  }
                },
                validate: (e) => {
                  return (
                    e.length === 0 ||
                    (new RegExp(".*.(jpe?g|png)$").test(e[0].name) &&
                      e[0].size < 40000)
                  );
                },
              })}
            />
            {errors.avatar?.type === "validate" ? (
              <StyledError role='invalid_avatar'>
                The file must be an image of extension .png, .jpg or .jpeg from
                at most 40KB.
              </StyledError>
            ) : null}
          </StyledInputGroup>

          {!loading ? (
            <StyledButton type='submit' data-testid='submit'>
              Submit
            </StyledButton>
          ) : (
            <Div>
              <CircularProgress data-testid='loader' />
            </Div>
          )}
        </form>
        {success ? (
          <StyledSuccess role='dialog'>Successfully added</StyledSuccess>
        ) : null}
        {failure_data !== "" ? (
          <StyledError role='alert'>{failure_data}</StyledError>
        ) : null}
      </StyledEntryCard>
    </EntryPage>
  );
};

export default BotsubmitView;
