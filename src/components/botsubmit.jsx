import React, {useState} from "react";
import FileUploader from "./fileUploader";

const Botsubmit = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [codigo, setCodigo] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    formData.append("codigo", codigo);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => alert("An error occurred"));
  };

  return (
    <div>
      <h1>SUBIR BOT</h1>
      <form className='requires-validation'>
        <label className='.form-content' htmlFor='name'>
          name
        </label>
        <input
          className='form-control'
          type='text'
          id='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Nombre del bot'
        />

        <FileUploader
          id='avatar'
          exp_ext='image/png'
          onFileSelectSuccess={(file) => setAvatar(file)}
          onFileSelectError={(error) => alert(error)}
        />

        <FileUploader
          id='codigo'
          exp_ext='text/x-python'
          onFileSelectSuccess={(file) => setCodigo(file)}
          onFileSelectError={(error) => alert(error)}
        />

        <input onClick={submitForm} type='submit' value='Submit' />
        {success && <div role='alert'>Successfully added</div>}
      </form>
    </div>
  );
};

export default Botsubmit;
