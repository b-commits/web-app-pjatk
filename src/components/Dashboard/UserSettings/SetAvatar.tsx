/** @jsxImportSource @emotion/react */
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { submitButton } from "../css/UserSettingsDashboard.style";
import { uploadLabelWrap } from "../css/Dashboard.style";
import { Alert } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";

export const SetAvatar: any = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState("");
  const [_fileName, setFileName] = useState("Choose file");
  const [success, setSuccess] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", file, currentUser.nickname + ".jpg");
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/api/profilePictureUpload",
      data: formData,
    })
      .then((res) => {
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label
          css={uploadLabelWrap}
          htmlFor="file-upload"
          className="custom-file-upload"
        >
          <i className="fa fa-cloud-upload"></i> Upload profile picture...
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={onChange}
          name="myImage"
          hidden={true}
        />
        <br></br>
        {loading ? (
          <CircularProgress />
        ) : (
          <button css={submitButton} type="submit">
            Upload
          </button>
        )}
      </div>
      {success && (
        <Alert severity="info">Your profile picture has been changed!</Alert>
      )}
    </form>
  );
};
