import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";
import { FeaturedProject } from "../../components/featured-project";
import { useEffect, useState } from "react";

export default function NftCalendar() {
  const INITIAL_DATA = [
    {
      title: "VeeFriends",
    },
    {
      title: "Tykes NFT",
    },
    {
      title: "NFT Academy",
    },
    {
      title: "Gents Croquet Club",
    },
  ];

  const [data, setData] = useState(INITIAL_DATA);
  const [filteredData, setFilteredData] = useState([])

  const getData = () =>{
    fetch("http://localhost:1337/api/nft-projects")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {

  }, [data]);

  const featuredListMarkup = data.map((item,key) => {
    return <FeaturedProject key={key} title={item.title} />;
  });

  return (
    <>
      <DefaultTemplate>
        <div className="featured">
          <div className="featured-list">{featuredListMarkup}</div>
        </div>
        <div className="filters-top"></div>
        <div className="filters-side"></div>
        <div className="list"></div>
      </DefaultTemplate>
    </>
  );
}
