import { css } from "@emotion/react";

export const DashboardWrap = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "1280px",
  margin: "auto",
  boxSizing: "border-box",
});

/*
----------------------------
----------------------------
   DASHBOARD MAIN STYLES
----------------------------
----------------------------
*/
export const Main = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  width: "80%",
  minHeight: "1000px",
  padding: "8px",
  boxSizing: "border-box",
});

export const userListings = css({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const listing = css({
  width: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: "15px",
  borderBottom: "1px dashed #cfcfcf",
  paddingBottom: "10px",
  boxSizing: "border-box",
  "& img": {
    height: "120px",
    width: "210px",
    padding: "2px",
    backgroundColor: "#cfcfcf",
    borderRadius: "8px",
    marginRight: "10px",
  },
  "& p": {
    width: "210px",
    padding: "2px",
  },
  "& h3": {
    width: "210px",
    marginTop: "0px",
  },
});

export const listingButton = css({
  fontSize: "12px",
  color: "#ffffff",
  height: "30px",
  width: "100px",
  marginBottom: "10px",
  alignContent: "center",
  alignSelf: "center",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  padding: "10px 20px",
  textDecoration: "none",
  boxSizing: "border-box",
});
