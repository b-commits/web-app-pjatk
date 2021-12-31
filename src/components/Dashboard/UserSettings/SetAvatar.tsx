/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

export const SetAvatar: any = () => {
  const [file, setFile] = useState('');
  const [_fileName, setFileName] = useState('Choose file');
  const { currentUser } = useContext(AuthContext)

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', file, currentUser.nickname + '.jpg');
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
      <div>
        <input
          type="file"
          onChange={onChange}
          name="myImage"
        />
        <button type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};
