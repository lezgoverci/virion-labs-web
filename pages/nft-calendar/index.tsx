
import DefaultTemplate from "../../templates/default";
import { useEffect, useState } from "react";
import { NftProject as NftProjectType } from "../../types/nftProject";
import { GetServerSideProps } from "next";
import useTransformNftProjectType from "../../hooks/useTransformNftProject";
import { Table } from "../../components/table";
import { Carousel } from "../../components/carousel";



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

  const featuredListMarkup = <Carousel data={data}/>;


  return (
    <>
      <DefaultTemplate>
        <div className="featured">
          <div className="featured-list">{featuredListMarkup}</div>
        </div>
        <div className="filters-top"></div>
        <div className="filters-side"></div>
        <div className="list"></div>
        <Table rows={data} headers={["name", "website","supply"]} />
      </DefaultTemplate>
    </>
  );
}


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/nft-projects");
  const data = await response.json();

  return { props: { data } };
};