/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { Button, DANGER } from '../../Misc/Button';
import { submitButton } from '../css/UserSettingsDashboard.style';

export const DeleteAccount: FC = () => {
  return (
    <>
      <p>To delete account ptess the button below</p>
      <Button
        title='DELETE ACCOUNT'
        type={DANGER}
        onCLick={() => console.log('delete account')}
      />
    </>
  );
};
