import {useState} from 'react';

export type Vector2D = {x: number; y: number};

export let useVector2D = (definingValue: Vector2D) => {
  let [valueVariable, setValue] = useState<Vector2D>(definingValue);

  let set = (value: Vector2D) => {
    setValue(value);
  };

  return {value: valueVariable, set};
};
