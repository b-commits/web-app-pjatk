/** @jsxImportSource @emotion/react */
import React from 'react';
import { userListings, listing, listingButton } from './Profile.style';

export const UserListings: React.FC = () => {
  const [userListing, setUserListings] = useState(null);
  return (
    <div css={userListings}>
      <Listing
        listingName={"Let's play forza horizon"}
        listingUrl={''}
        listingDesc={
          'Join and lets race together in forza horizon. Want just to discus? Join anyway, every fun of forza is welcome here ;) '
        }
        gameName={'Forza Horizon 5'}
        gameImgUrl={
          'https://sm.ign.com/t/ign_pl/screenshot/default/5353_ypqg.1280.jpg'
        }
      />

      <Listing
        listingName={"Let's play forza horizon"}
        listingUrl={''}
        listingDesc={
          'Quisque suscipit ipsum eget convallis faucibus. In pellentesque pretium nisl, nec luctus arcu. Nunc fermentum tellus est, et gravida lacus finibus a. Nunc lacinia lorem et lectus.'
        }
        gameName={'Destiny 2'}
        gameImgUrl={
          'https://bigbaddice.pl/wp-content/uploads/2018/07/warmind2.jpg'
        }
      />

      <Listing
        listingName={'PayDay 2 '}
        listingUrl={''}
        listingDesc={
          'Nunc volutpat et eros a fringilla. Nullam quis finibus dui. Duis gravida, libero vitae hendrerit viverra, magna elit finibus massa, quis volutpat justo dui vitae dui.'
        }
        gameName={'PayDay 2'}
        gameImgUrl={
          'https://cdn-ext.fanatical.com/production/product/1280x720/9f765b68-118f-432f-a282-c3e1cd1f976c.jpeg'
        }
      />

      <Listing
        listingName={'League of Legends Arams all day'}
        listingUrl={''}
        listingDesc={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit lacus a purus ullamcorper, non molestie eros aliquam. Nam nec finibus orci. Sed dui dui, pretium at purus id, accumsan pellentesque felis. Mauris consequat vulputate quam. Phasellus lacus libero.'
        }
        gameName={'League of Legends'}
        gameImgUrl={
          'https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg'
        }
      />

      <Listing
        listingName={'Looking for EUIV 1v1 '}
        listingUrl={''}
        listingDesc={
          'Suspendisse et porta lacus. Proin ut molestie urna. Sed sodales porttitor tellus, vestibulum condimentum purus consectetur eget. Quisque rhoncus urna vitae neque tempus, at elementum massa fermentum. Maecenas semper pretium pulvinar.'
        }
        gameName={'Europa Universalis IV'}
        gameImgUrl={
          'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S3_2560x1440-aa3002ec221d43dcd7e49f5458e74766'
        }
      />
    </div>
  );
};

const Listing: React.FC<{
  listingName: string;
  listingUrl: string;
  listingDesc: string;
  gameName: string;
  gameImgUrl: string;
}> = ({ listingName, listingUrl, listingDesc, gameName, gameImgUrl }) => {
  return (
    <>
      <div css={listing}>
        <img alt="gameImage" src={gameImgUrl} />
        <div style={{ width: '500px' }}>
          <h3>{listingName}</h3>
          {listingDesc}
          <br />
        </div>
        <div style={{ width: '100px' }}>
          <UserListingsButton
            listingUrl={''}
            color={'#44c767'}
            value={'Open'}
          />
          <UserListingsButton
            listingUrl={''}
            color={'#007dc1'}
            value={'Share'}
          />
          <UserListingsButton
            listingUrl={''}
            color={'#f24437'}
            value={'Report'}
          />
        </div>
      </div>
    </>
  );
};

const UserListingsButton: React.FC<{
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
