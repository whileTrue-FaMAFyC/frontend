import React, {useState} from "react";
import {useForm} from "react-hook-form";
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
import {Link, useNavigate} from "react-router-dom";

const Botsubmit = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [success, setSuccess] = useState(false); //Form subido con exito
  const [failure_data, setFailure_data] = useState(""); //Detalle del servidor

  const [file_cod, setFile_cod] = useState(""); //base64 del codigo
  const [fileName_cod, setFileName_cod] = useState(""); //filename del codigo

  const [file_av, setFile_av] = useState(""); //base64 del avatar
  const [imgAvatar, setImgAvatar] = useState(null); //image to show on form

  const [loading, setLoading] = useState(false); //processing post to server state

  const navigate = useNavigate();

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const onUploadFileChange = ({target}, setFile, setFileName) => {
    if (target !== null) {
      if (target.files < 1 || !target.validity.valid) {
        return;
      }
      if (target.files[0] !== undefined) {
        setFileName(target.files[0].name);
        fileToBase64(target.files[0], (err, result) => {
          if (result) {
            setFile(result);
          }
        });
      } else {
        setFileName("");
        setFile("");
      }
    }
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgAvatar(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const submitForm = async (data) => {
    setFailure_data("");
    setLoading(true);
    data.source_code = file_cod;
    data.avatar = file_av;
    data.bot_filename = fileName_cod;
    const token = localStorage.getItem("user");
    try {
      await fetch(`${process.env.REACT_APP_API_KEY}create-bot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
          Authorization: `${token}`,
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        setLoading(false);
        const data = await response.json();
        if (response.status === 200 || response.status === 201) {
          setSuccess(true);
          navigate("/library");
        } else {
          setSuccess(false);
          setFailure_data(data.detail);
        }
      });
    } catch (err) {
      setLoading(false);
      setSuccess(false);
      setFailure_data("Network error");
    }
  };

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
                    console.log(file);
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
                Insert image under 40 KB
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
        <Div>
          Want to see your robots?
          <StyledButton>
            <Link to='/library' data-testid='linkToLibrary'>
              Robots library
            </Link>
          </StyledButton>
        </Div>
      </StyledEntryCard>
    </EntryPage>
  );
};

export default Botsubmit;
