/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { userListings, listing, listingButton } from "./css/Dashboard.style";

export const ListingDashboard: FC = () => {
  return (
    <>
      <h1>Listings</h1>
      <div>
        <h1>Create New Listing</h1>
        <form>
          <label htmlFor="">
            Title
            <input type="text" />
          </label>
          <label htmlFor="">
            Game
            <input type="text" />
          </label>
          <label htmlFor="">
            Advance level
            <input type="text" />
          </label>
          <input type={"submit"} />
        </form>
      </div>
      <div>
        <h1>Menage Your Listings</h1>
        <UserListings />
      </div>
    </>
  );
};

const Listing: FC<{
  listingName: string;
  listingUrl: string;
  listingDesc: string;
  gameName: string;
  gameImgUrl: string;
}> = ({ listingName, listingUrl, listingDesc, gameName, gameImgUrl }) => {
  return (
    <>
      <div css={listing}>
        <div>
          <img alt="gameImage" src={gameImgUrl} />
          <h3>{listingName}</h3>
          <p>{listingDesc}</p>
          <br />
        </div>
        <div
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <UserListingsButton
            listingUrl={""}
            color={"#44c767"}
            value={"Edit"}
          />
          <UserListingsButton
            listingUrl={""}
            color={"#007dc1"}
            value={"Share"}
          />
          <UserListingsButton
            listingUrl={""}
            color={"#f24437"}
            value={"Delete"}
          />
        </div>
      </div>
    </>
  );
};

const UserListingsButton: FC<{
  listingUrl: string;
  color: string;
  value: string;
}> = ({ listingUrl, color, value }) => {
  return (
    <a href={listingUrl}>
      <button css={listingButton} style={{ backgroundColor: color }}>
        {value}
      </button>
    </a>
  );
};

export const UserListings: FC = () => {
  return (
    <div css={userListings}>
      <Listing
        listingName={"Let's play forza horizon"}
        listingUrl={""}
        listingDesc={
          "Join and lets race together in forza horizon. Want just to discus? Join anyway, every fun of forza is welcome here ;) P.S. We are newbies too, dont laught at us :D "
        }
        gameName={"Forza Horizon 5"}
        gameImgUrl={
          "https://sm.ign.com/t/ign_pl/screenshot/default/5353_ypqg.1280.jpg"
        }
      />

      <Listing
        listingName={"Let's play forza horizon"}
        listingUrl={""}
        listingDesc={
          "Quisque suscipit ipsum eget convallis faucibus. In pellentesqunec luctus arcu. Nunc fermentum tellus est, et gravida lacus finibus a. Nunc lacinia lorem et lectus."
        }
        gameName={"Destiny 2"}
        gameImgUrl={
          "https://bigbaddice.pl/wp-content/uploads/2018/07/warmind2.jpg"
        }
      />

      <Listing
        listingName={"PayDay 2 "}
        listingUrl={""}
        listingDesc={
          "Nunc volutpat et eros a fringilla. Nullam quis finibus dui. Duis gravida, libero vitae hendrerit viverra, magna elit finibus massa, quis volutpat justo dui vitae dui."
        }
        gameName={"PayDay 2"}
        gameImgUrl={
          "https://cdn-ext.fanatical.com/production/product/1280x720/9f765b68-118f-432f-a282-c3e1cd1f976c.jpeg"
        }
      />

      <Listing
        listingName={"League of Legends"}
        listingUrl={""}
        listingDesc={
          "Lorem ipsum dolor sit amet, nsequat vulputate quam. Phasellus lacus  nsequat nsequat vulputate quam. Phasellus vulputate quam. Phasellus libero."
        }
        gameName={"League of Legends"}
        gameImgUrl={
          "https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg"
        }
      />
    </div>
  );
};
