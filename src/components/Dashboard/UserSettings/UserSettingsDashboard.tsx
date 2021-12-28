/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { SectionDashboard } from '../SectionDashboard';
import { ChangePassword } from './ChangePassword';
import { DeleteAccount } from './DeleteAccount';
import { EditDetails } from './EditDetails';
import { ReportAdmin } from './ReportAdmin';
import { SetAvatar } from './SetAvatar';

export const UserSettingsDashboard: FC = () => {
  return (
    <>
      <SectionDashboard title={'Your avatar'} component={<SetAvatar />} />
      <SectionDashboard
        title={'Change password'}
        component={<ChangePassword />}
      />
      <SectionDashboard
        title={'Edit your details'}
        component={<EditDetails />}
      />
      <SectionDashboard
        title={'Report problem to administrator'}
        component={<ReportAdmin />}
      />
      <SectionDashboard
        title={'Delete Account'}
        component={<DeleteAccount />}
      />
    </>
  );
};
