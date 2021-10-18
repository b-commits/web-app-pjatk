/** @jsxImportSource @emotion/react */
import React from "react";
import {
  homeBanner,
  homeBannerContent,
  bannerConentHeader,
  bannerConentDesc,
  blueText,
  smallText,
  homeMain,
  listingItem,
  listingHeader,
  listingHeaderTitle,
  listingImg,
  listingDesc,
  listingFooter,
} from "./Home.style";

export const Home: React.FC = () => {
  return (
    <>
      <div css={homeBanner}>
        <div css={homeBannerContent}>
          <div css={bannerConentHeader}>
            <span css={smallText}>LOOK FOR A GROUP</span>
            <h1>
              and spend <span css={blueText}>less time in queue</span>.
            </h1>
          </div>
          <div css={bannerConentDesc}>
            <div>
              <button>SIGN UP NOW</button>
            </div>
            <div>
              <p>
                <span css={blueText}>lfg-app</span> allows you to find teammates
                for <span css={blueText}>any</span> online game out there. Sign
                up now to browse through
                <span css={blueText}>multiple listings</span> and connect with{" "}
                <span css={blueText}>other people</span>.
              </p>
              <p>
                <span css={blueText}>lfg-app</span> is very simple to use, so
                we' are hoping you can spend some quality time playing with your
                new buddies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main css={homeMain}>
        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>

        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>

        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>

        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>

        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>

        <div css={listingItem}>
          <div>
            <div css={listingHeader}>
              <i className="fas fa-users"></i>
              <span css={listingHeaderTitle}>
                Listing X <br /> Stardew Valey
              </span>
              <i className="fas fa-share"></i>
            </div>
          </div>
          <div css={listingImg}>
            <img
              alt=""
              src="https://d-art.ppstatic.pl/kadry/k/r/1/51/a5/5e287d9223f8f_o_large.jpg"
            />
          </div>
          <div css={listingDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            mollitia reiciendis cum nostrum, unde exercitationem, libero
            assumenda, temporibus vero est totam dolor delectus neque cupiditate
            commodi facilis necessitatibus atque dicta.
          </div>
          <div css={listingFooter}>
            <span css={blueText}>JOIN IN</span>
            <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
            <span css={blueText}>HIDE</span>
          </div>
        </div>
      </main>
    </>
  );
};
