
import DefaultTemplate from "../../templates/default";
import { useEffect, useState } from "react";
import { NftProject as NftProjectType } from "../../types/nftProject";
import { GetServerSideProps } from "next";
import useTransformNftProjectType from "../../hooks/useTransformNftProject";



type Props = {
  data: NftProjectType;
};

export default function NftCalendar(props) {
  const INITIAL_DATA : NftProjectType[]= [];

  const [data, setData] = useState(INITIAL_DATA);
  const [filteredData, setFilteredData] = useState([])


  // const getData = () =>{
  //   fetch("/api/nft-projects")
  //   .then(res => res.json())
  // //  .then(res => setData(res.data))
  //   .catch(err => console.log(err))
  // }


  useEffect(() => {
    console.log("data",data)
  }, [data]);

  useEffect(() => {
    console.log("props", props)
    setData(props.data.data)
  }, [props]);

  const featuredListMarkup = data.map(item =>{
    return <li>{item.attributes?.name}</li>
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


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/nft-projects");
  const data = await response.json();

  return { props: { data } };
};