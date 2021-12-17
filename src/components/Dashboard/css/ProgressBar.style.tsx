import { css } from "@emotion/react";

export const ProgressBarWrap = css({
  color: "white",
  fontFamily: "Tahoma",
  fontSize: "1em",
  backgroundColor: "#f1f1f1",
  width: "50%",
  boxShadow: "0px 4px 14px -4px rgba(55, 58, 54, 1)",
  WebkitBoxShadow: "0px 4x 14px -4px rgba(55, 58, 54, 1)",
  MozBoxShadow: "0px 4px 14px -4px rgba(55, 58, 54, 1)",
  border: "4px solid #fff",
  boxSizing: "inherit",
});

export const ProgressBarPercent = css({
  color: "white",
  fontFamily: "Tahoma",
  fontSize: "1em",
  textAlign: "center",
  width: "25%",
  paddingTop: 5,
  paddingBottom: 5,
  backgroundColor: "rgb(37,31,255)",
  background:
    "linear-gradient(270deg, rgba(37,31,255,1) 0%, rgba(78,74,198,1) 100%, rgba(0,212,255,1) 100%)",
});
