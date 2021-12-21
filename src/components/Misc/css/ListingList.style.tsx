import { css } from "@emotion/react";

export const listingListStyle = css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "8px",
  boxSizing: "border-box",
  "& div:nth-of-type(-n+3)": {
    marginTop: 0,
  },
});
