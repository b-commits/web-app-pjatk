/** @jsxImportSource @emotion/react */
import React from "react";
import { profileWrap, profileHeader } from "./Profile.style";
import { UserDetails } from "./UserDetails";
import { ProfileContent } from "./ProfileContent";

//all graphics url-s are temporary
export class Profile extends React.Component {
  state = {
    isUserOnline: false,
  };

  render() {
    return (
      <>
        <div css={profileWrap}>
          <div css={profileHeader}>
            <div>
              <UserDetails isUserOnline={this.state.isUserOnline} />
            </div>
          </div>
          <ProfileContent />
        </div>
      </>
    );
  }
}
