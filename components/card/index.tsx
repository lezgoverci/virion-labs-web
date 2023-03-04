import Image from "next/image";
import { useEffect } from "react";
import { NftProject } from "../../types/nftProject";
export function Card({ item }: { item: NftProject }) {

  return (
    <div className="single-slide-product">
      <div className="product-style-one no-overlay">
        <div className="card-thumbnail">
          <a href="product-details.html">
            <Image
              width="225px"
              height="225px"
              src="assets/images/portfolio/portfolio-01.jpg"
              alt="NFT_portfolio"
            />
          </a>
        </div>
        <div className="product-share-wrapper">
          <div className="profile-share">
            <a href="author.html" className="avatar" data-tooltip="John Due">
              <Image
                width="25px"
                height="25px"
                src="assets/images/client/client-4.png"
                alt="Nft_Profile"
              />
            </a>
            <a href="author.html" className="avatar" data-tooltip="John Due">
              <Image
                width="25px"
                height="25px"
                src="assets/images/client/client-5.png"
                alt="Nft_Profile"
              />
            </a>
            <a href="author.html" className="avatar" data-tooltip="John Due">
              <Image
                width="25px"
                height="25px"
                src="assets/images/client/client-6.png"
                alt="Nft_Profile"
              />
            </a>
            <a className="more-author-text" href="#">
              9+ Place Bit.
            </a>
          </div>
          <div className="share-btn share-btn-activation dropdown">
            <button
              className="icon"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                viewBox="0 0 14 4"
                fill="none"
                width="16"
                height="16"
                className="sc-bdnxRM sc-hKFxyN hOiKLt"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <div className="share-btn-setting dropdown-menu dropdown-menu-end">
              <button
                type="button"
                className="btn-setting-text share-text"
                data-bs-toggle="modal"
                data-bs-target="#shareModal"
              >
                Share
              </button>
              <button
                type="button"
                className="btn-setting-text report-text"
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <a href="product-details.html">
          <span className="product-name">{item?.attributes.name}</span>
        </a>
        <span className="latest-bid">Highest bid 1/20</span>
        <div className="bid-react-area">
          <div className="last-bid">0.244wETH</div>
          <div className="react-area">
            <svg
              viewBox="0 0 17 16"
              fill="none"
              width="16"
              height="16"
              className="sc-bdnxRM sc-hKFxyN kBvkOu"
            >
              <path
                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
            </svg>
            <span className="number">322</span>
          </div>
        </div>
      </div>
    </div>
  );
}
