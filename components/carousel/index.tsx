import { Card } from "../card";
import { NftProject } from "../../types/nftProject";
import { useEffect, useRef, useState } from "react";

export function Carousel({ data }: { data: NftProject[] }) {
  const [filteredData, setFilteredData] = useState(data);
  const myRef = useRef(null)

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div className="container">
      <div className="row mb--30">
        <div className="col-12">
          <h3 className="title">Featured NFT projects</h3>
        </div>
      </div>
      <div className="row">
        <div ref={myRef} className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
          {filteredData.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
