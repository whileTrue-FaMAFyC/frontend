import React, {useRef} from "react";

const FileUploader = ({
  id,
  exp_ext,
  req,
  onFileSelectSuccess,
  onFileSelectError,
}) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    var extension = file.type;
    console.log(extension);
    if (extension !== exp_ext)
      onFileSelectError(`Image must be ${exp_ext} file`);
    else onFileSelectSuccess(file);
  };
  if (req)
    return (
      <div>
        <label className='mb-3 mr-1' htmlFor={id}>
          {id + ":"}
        </label>
        <input
          className='form-control'
          type='file'
          id={id}
          onChange={handleFileInput}
          required
        />
      </div>
    );
  else
    return (
      <div>
        <label className='mb-3 mr-1' htmlFor={id}>
          {id + ":"}
        </label>
        <input
          className='form-control'
          type='file'
          id={id}
          onChange={handleFileInput}
        />
      </div>
    );
};

export default FileUploader;
