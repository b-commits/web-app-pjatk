import { css } from "@emotion/react";
/*
----------------------------
----------------------------
  DASHBOARD SIDEBAR STYLES
----------------------------
----------------------------
*/

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
  marginTop: "15px",
  marginLeft: "-15px",
  padding: 0,
  width: "100%",
});

export const sidebarMenuItem = css({
  width: "100%",
});

export const userDetailsWrap = css({
  color: "#000",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "8px",
  minHeight: "150px",
  boxSizing: "border-box",
});
