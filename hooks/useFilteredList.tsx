import { useState, useEffect } from 'react';

type Item = {
  [key: string]: any;
};

type FilteredList = Item[];

type FilterCondition = {
  propertyName: string;
  operator: '>' | '>=' | '<' | '<=';
  value: number;
};

type UseFilteredListProps = {
  list: Item[];
  filterConditions: FilterCondition[];
};

const useFilteredList = ({ list, filterConditions }: UseFilteredListProps): FilteredList => {
  const [filteredData, setFilteredData] = useState<FilteredList>([]);

  useEffect(() => {
    if (list.length > 0 && filterConditions.length > 0) {
      const filteredList = list.filter((item: Item) => {
        let match = true;
        for (let condition of filterConditions) {
          if (condition.operator === '>') {
            match = match && item[condition.propertyName] > condition.value;
          } else if (condition.operator === '>=') {
            match = match && item[condition.propertyName] >= condition.value;
          } else if (condition.operator === '<') {
            match = match && item[condition.propertyName] < condition.value;
          } else if (condition.operator === '<=') {
            match = match && item[condition.propertyName] <= condition.value;
          }
        }
        return match;
      });
      setFilteredData(filteredList);
    }
  }, [list, filterConditions]);

  return filteredData;
};

export default useFilteredList;
