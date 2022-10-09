import React, {useState} from "react";
import FileUploader from "./fileUploader";
import axios from "axios";

const Botsubmit = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [codigo, setCodigo] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    formData.append("codigo", codigo);

    await axios
      .post("//localhost:3000", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Nombre del bot'
        />

        <FileUploader
          onFileSelectSuccess={(file) => setAvatar(file)}
          onFileSelectError={({error}) => alert(error)}
        />

        <FileUploader
          onFileSelectSuccess={(file) => setCodigo(file)}
          onFileSelectError={({error}) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};

export default Botsubmit;
