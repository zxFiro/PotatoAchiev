import dynamic from "next/dynamic";

import type { Sample1 } from "@/datasamples/sample1Type";
import s from "../../datasamples/sample1.json";

const Achievements = dynamic(
  () => {
    return import("./achievements");
  },
  { ssr: false },
);

export const AchievLoad = () => {
  const d: Sample1 = s as Sample1;
  return <>{d ? <Achievements sample={d as Sample1} /> : console.log(d)}</>;
};

export default AchievLoad;
