import DefaultTemplate from "../../templates/default";
import { SetStateAction, useEffect, useState } from "react";
import { NftProject as NftProjectType } from "../../types/nftProject";
import { GetServerSideProps } from "next";
import useTransformNftProjectType from "../../hooks/useTransformNftProject";
import { Table } from "../../components/table";
import { Carousel } from "../../components/carousel";
import { Filter } from "../../components/filter";
import { SideFilters } from "../../components/side-filters";

type Props = {
  projects: {
    data: NftProjectType[];
  };
};

type FilterCondition = {
  propertyName: string;
  operator: ">" | ">=" | "<" | "<=";
  value: number;
};

export default function NftCalendar({ projects }: Props) {
  const INITIAL_DATA: NftProjectType[] = [];

  const [data, setData] = useState(INITIAL_DATA);
  const [filters, setFilters] = useState<FilterCondition[]>([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (projects.data?.length > 0) {
      setData(projects.data);
      setFilteredData(projects.data)
    }
  }, [projects]);


  const updateList = (newList: NftProjectType[]) : void =>{
    setFilteredData(newList)
  }



  return (
    <>
      <DefaultTemplate>
        <div className="featured">
          <div className="featured-list">
          <Carousel data={data} />
          </div>
        </div>
        {/* <div className="filters-top"></div>
        <div className="filters-side"></div>
        <div className="list"></div> */}

        <div className="container">
          <div className="row">
            <Filter list={filteredData} updateList={updateList}/>
          </div>
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <SideFilters />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <Table rows={filteredData} headers={["name", "website", "supply"]} />
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URI}/api/nft-projects`;


  const response = await fetch(url);
  const projects = await response.json();


  return { props: { projects } };
};
