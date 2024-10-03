import { proxy } from "valtio";

interface panelState {
  state: boolean;
  item: number;
}

const initialObj: panelState = {
  state: false,
  item: 0,
};

const AchievProxy = proxy(initialObj);

export const reset = () => {
  Object.assign(AchievProxy, initialObj);
};

export default AchievProxy;
