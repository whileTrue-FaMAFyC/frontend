import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {BotsubmitView} from "./BotsubmitView";

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
    if (e?.target.files[0]) {
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
    <BotsubmitView
      register={register}
      handleSubmit={handleSubmit}
      submitForm={submitForm}
      onUploadFileChange={onUploadFileChange}
      onChangePicture={onChangePicture}
      success={success}
      failure_data={failure_data}
      file_cod={file_cod}
      fileName_cod={fileName_cod}
      file_av={file_av}
      imgAvatar={imgAvatar}
      setFile_cod={setFile_cod}
      setFileName_cod={setFileName_cod}
      setFile_av={setFile_av}
      loading={loading}
    />
  );
};

export default Botsubmit;
