import { css } from "@emotion/react";
/*
----------------------------
----------------------------
  DASHBOARD SIDEBAR STYLES
----------------------------
----------------------------
*/
export const sidebar = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  width: "20%",
  minHeight: "1000px",
  padding: "8px",
  borderRight: "1px dashed #000",
  boxSizing: "border-box",

  "& h1": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
  },
});

export const userAvatar = css({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
});

export const userStatusDot = css({
  height: "15px",
  width: "15px",
  marginRight: "10px",
  backgroundColor: "#64a338",
  borderRadius: "50%",
  boxShadow: "",
  boxSizing: "border-box",
});

export const hrSidebarBreaker = css({
  margin: 0,
  marginLeft: "-15px",
  marginRight: "-15px",
  padding: 0,
  width: "100%",
  border: "1px solid #000",
});
/*
----------------------------
----------------------------
    SIDEBAR MENU STYLES
----------------------------
----------------------------
*/
export const sidebarMenu = css({
  listStyleType: "none",
  margin: 0,
  marginTop: "10px",
  marginLeft: "-15px",
  padding: 0,
  width: "100%",
});

export const sidebarMenuItem = css({
  width: "100%",
});
