import {useState} from 'react';

export type Vector3D = {x: number; y: number; z: number};

export let useVector3D = (definingValue: Vector3D) => {
  let [valueVariable, setValue] = useState<Vector3D>(definingValue);

  let set = (value: Vector3D) => {
    setValue(value);
  };

  return {value: valueVariable, set};
};
