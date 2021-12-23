/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { section, sectionHeader } from './css/DashboardSection.style';

interface SectionProps {
  title: string;
  component?: React.ReactNode;
}
export const SectionDashboard: FC<SectionProps> = ({ title, component }) => {
  return (
    <section css={section}>
      <h1 css={sectionHeader}>{title}</h1>
      <div>{component}</div>
    </section>
  );
};
