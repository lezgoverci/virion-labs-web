import { useState, useEffect, SetStateAction } from 'react';
import { NftProject as NftProjectType } from '../types/nftProject';
import { INITIAL_NFT_PROJECT_VALUES } from '../initial_values/nftProject';

type SetDataType = (data: any) => void;

function useTransformNftProjectType(input:any): [NftProjectType, SetDataType] {
  const [data, setData] = useState<NftProjectType>(INITIAL_NFT_PROJECT_VALUES);

  const setNewData = (newData: SetStateAction<NftProjectType>) =>{
    setData(newData)
  }

  useEffect(() => {
    const transformedData = input?.attributes
    setData(transformedData)

  }, [input]);

  return [data, setNewData];
}

export default useTransformNftProjectType;
