import DefaultTemplate from "../../templates/default";
import { SetStateAction, useEffect, useState } from "react";
import { NftProject as NftProjectType } from "../../types/nftProject";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import useTransformNftProjectType from "../../hooks/useTransformNftProject";
import { Table } from "../../components/table";
import { Carousel } from "../../components/carousel";
import { Filter } from "../../components/filter";
import { SideFilters } from "../../components/side-filters";

type Props = {
  projects: NftProjectType[];
};

type FilterCondition = {
  propertyName: string;
  operator: ">" | ">=" | "<" | "<=";
  value: number;
};

type ServerSidePropsType = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function NftCalendar({ projects }: ServerSidePropsType) {
  const INITIAL_DATA: NftProjectType[] = [];

  const [data, setData] = useState(INITIAL_DATA);
  const [filters, setFilters] = useState<FilterCondition[]>([]);
  const [filteredData, setFilteredData] = useState<NftProjectType[]>([]);

  const transformProps = ({
    data,
  }: {
    data: ServerSidePropsType;
  }): NftProjectType[] => {
    const transformedProps: NftProjectType[] = data.projects?.data.map(
      (project: {
        attributes: {
          blockchain: {
            data:{
              attributes:{
                name: string;
                currency: string;
              }

            }
          };
          project_founders: any;
          name: string;
          description: string;
          website: string;
          twitter: string;
          instagram: string;
          supply: string;
          discord: string;
          facebook: string;
          price: string;
          drop_date: string;
        };
      }) => {
        console.log("project.attributes", project.attributes);
        const transformedProject: NftProjectType = {
          attributes: {
            ...project.attributes,
            blockchain: {
              currency: project.attributes.blockchain.data?.attributes.currency,
              name: project.attributes.blockchain.data?.attributes.name,
            },
            project_founders: project.attributes.project_founders,
          },
        };

        console.log("transformedProject", transformedProject);

        return transformedProject;
      }
    );

    return transformedProps;
  };

  // useEffect(()=>{
  //   console.log("server side props type", typeof ServerSidePropsType)
  // },[])

  useEffect(() => {
    if (projects?.data.length > 0) {
      const transformedData = transformProps({ data: { projects: projects } });
      setData(transformedData);
      setFilteredData(transformedData);
    }
  }, [projects]);

  const updateList = (newList: NftProjectType[]): void => {
    setFilteredData(newList);
  };

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
            <Filter list={data} updateList={updateList} />
          </div>
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <SideFilters />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <Table
                rows={filteredData}
                headers={[
                  "image",
                  "name",
                  "website",
                  "blockchain",
                  "minting price",
                  "supply",
                  "drop",
                ]}
              />
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
}

export const getServerSideProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URI}/api/nft-projects`;

  const response = await fetch(url);
  const projects = await response.json();
  return { props: { projects } };
};
