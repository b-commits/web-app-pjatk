/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react';
import axios from 'axios';

export const SetAvatar: any = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose file');

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', file);
    axios({
      method: 'POST',
      withCredentials: true,
      url: 'http://localhost:5000/api/profilePictureUpload',
      data: formData,
    })
      .then((res) => res.status)
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="custom-file mb-4">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          onChange={onChange}
          name="myImage"
        />
        <button type="submit" className="btn btn-primary mt-4">
          Upload
        </button>
      </div>
    </form>
  );
};
