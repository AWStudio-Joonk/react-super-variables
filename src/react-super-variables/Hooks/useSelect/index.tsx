import {useEffect, useState} from 'react';

export let useSelect = (selectionList: string[]) => {

  let [selecting, setSelecting] = useState<Array<string>>(selectionList);
  let [valueIndex, setIndex] = useState<number | null>();
  let [selectedValue, setSelectedValue] = useState<string>();

  useEffect(() => {
    if (valueIndex) {
      setSelectedValue(selecting[valueIndex]);
    }
  }, [valueIndex, selecting]);

  let SetSelecting = (list: Array<string>) => {
    setSelecting(list);
  };
  let AddSelecting = (value: string) => {
    setSelecting(prev => {
      return [...prev, value];
    });
  };
  let Switch = (index: number | null) => {
    if (typeof index === 'number') {
      setIndex(Math.max(Math.min(index, selecting.length - 1), 0));
    } else {
      setIndex(null);
    }
  };

  return {
    value: selectedValue,
    index: valueIndex,
    selecting,
    SetSelecting,
    AddSelecting,
    Switch,
  };
};
