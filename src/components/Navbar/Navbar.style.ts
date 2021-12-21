import { css } from "@emotion/react";

export const navContainer = css({
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 1)",
  top: 0,
  marginTop: 0,
  boxShadow: "3px 3px 5px -1px rgba(55, 58, 54, 1)",
  // WebkitBoxShadow: "8px 8px 14px -4px rgba(55, 58, 54, 1)",
  // MozBoxShadow: "8px 8px 14px -4px rgba(55, 58, 54, 1)",
});

export const navMain = css({
  display: "flex",
  width: "100%",
  fontSize: "x-large",
  fontFamily: "Roboto",
  margin: 0,
});

export const navList = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  listStyleType: "none",
  width: "80%",
  padding: "50px",
  margin: "auto",
  boxSizing: "border-box",
  "& a": {
    textDecoration: "none",
  },
});

export const navLogo = css({
  height: '5rem',
  marginTop: '-26px'
})