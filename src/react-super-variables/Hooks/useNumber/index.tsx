import { useState } from "react";

export let useNumber = (
  definingValue: any,
  options?: any
) => {
  let [valueVariable, setValue] = useState<number>(definingValue);

  let set = (value: number) => {
    let prevalue = value;
    if (options?.min) {
      prevalue = Math.max(value, options.min);
    }
    if (options?.max) {
      prevalue = Math.min(value, options.max);
    }

    setValue((prev) => {
      if (options?.step) {
        if (prevalue > prev) {
          prevalue = Math.ceil(prevalue);
          //   prevalue = prev+ - prevalue;
        } else if (prevalue < prev) {
          prevalue = Math.floor(prevalue);
        }
      }
      if (options?.decimal) {
        prevalue = Number(prevalue.toFixed(options.decimal));
      }
      return prevalue;
    });
  };

  return {
    value: valueVariable,
    set,
  };
};
