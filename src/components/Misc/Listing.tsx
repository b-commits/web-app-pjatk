import React, { FC } from "react";
interface ListingProps {
  title: string;
  url: string;
  desc: string;
  gameName: string;
  gameImgUrl: string;
}
export const Listing: FC<ListingProps> = ({
  title,
  url,
  desc,
  gameName,
  gameImgUrl,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{desc}</div>
    </section>
  );
};
