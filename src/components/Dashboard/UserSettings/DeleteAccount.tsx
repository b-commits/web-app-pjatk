/** @jsxImportSource @emotion/react */
import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { Button, DANGER } from '../../Misc/Button';
import { deleteAccount } from '../ApiCalls';
import { submitButton } from '../css/UserSettingsDashboard.style';

export const DeleteAccount: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const handleDelete = () => {
    history.push('/');
    deleteAccount(currentUser.id)
      .then(() => alert('Your account has been successfully deleted'))
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <p>To delete account ptess the button below</p>
      <Button
        title="DELETE ACCOUNT"
        type={DANGER}
        onCLick={() => handleDelete()}
      />
    </>
  );
};
