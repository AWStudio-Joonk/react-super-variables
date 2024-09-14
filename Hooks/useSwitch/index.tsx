import {useState} from 'react';

export type SwitchView = 'switch' | 'checkbox';

export let useSwitch = (op: {value: boolean; view: SwitchView}) => {
  let [view, setView] = useState<SwitchView>(op.view ? op.view : 'switch');
  let [value, setValue] = useState<boolean>(op.value ? op.value : false);

  let switchView = () => {
    view === 'switch' ? setView('checkbox') : setView('switch');
  };
  let switchValue = () => {
    setValue(!value);
  };

  return {
    value,
    view,
    switch: switchValue,
    switchView,
  };
};
