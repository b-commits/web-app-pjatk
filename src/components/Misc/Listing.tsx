/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Button, DANGER, INFO, SUCCES } from "./Button";
import {
  listingStyle,
  gameImgStyle,
  titleStyle,
  gameNameStyle,
  descStyle,
  gameBox,
  buttonsWrap,
} from "./css/Listing.style";
interface ListingProps {
  id: number;
  title: string;
  url: string;
  desc: string;
  gameName: string;
  gameImgUrl: string;
}
export const Listing: FC<ListingProps> = ({
  id,
  title,
  url,
  desc,
  gameName,
  gameImgUrl,
}) => {
  const description = desc.length > 80 ? desc.slice(0, 90) + "..." : desc;
  const gameNameSlice =
    gameName.length > 80 ? gameName.slice(0, 90) + "..." : gameName;

  return (
    <div css={listingStyle}>
      <div css={gameBox}>
        <img css={gameImgStyle} src={gameImgUrl} alt={gameName} />
        <span css={gameNameStyle}>{gameNameSlice}</span>
      </div>
      <h1 css={titleStyle}>{title}</h1>
      <p css={descStyle}>{description}</p>
      <div>
        <Button
          title="Delete"
          type={DANGER}
          onCLick={() => {
            console.log("klik");
          }}
        />{" "}
        <Button
          title="Open"
          type={SUCCES}
          onCLick={() => {
            console.log("klik");
          }}
        />{" "}
        <Button
          title="Edit"
          type={INFO}
          onCLick={() => {
            console.log("klik");
          }}
        />
      </div>
    </div>
  );
};
