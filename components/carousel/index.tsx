import { Card } from "../card";
import { NftProject } from "../../types/nftProject";
import { Filter } from "../filter";

type FeaturedNftProjects = NftProject[];

export function Carousel({ data }: { data: FeaturedNftProjects }) {
  const cardMarkup = data.map((item, index) => {
    return <Card data={item} key={index} />;
  });

  return (
    <div className="container">

      <div className="row mb--30">
        <div className="col-12">
          <h3 className="title">Featured NFT projects</h3>
        </div>
      </div>
      <div className="row">
        <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
          {cardMarkup}
        </div>
      </div>
      <Filter />
    </div>
  );
}
