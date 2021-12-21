/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { section } from "./css/DashboardSection.style";

interface SectionProps {
  title: string;
  component?: React.ReactNode;
}
export const DashboardSection: FC<SectionProps> = ({ title, component }) => {
  return (
    <section css={section}>
      <h1>{title}</h1>
      <div>{component}</div>
    </section>
  );
};
