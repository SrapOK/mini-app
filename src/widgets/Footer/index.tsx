import { createContext, Dispatch, SetStateAction, useState } from "react";

import { FooterItem } from "@/components/FooterItem";
import { Link } from "@/components/Link/Link";

import bondsIcon from "./bonds_icon.svg";
import stakeIcon from "./stake_icon.svg";
import rewardsIcon from "./rewards_icon.svg";

interface footerContext {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}
export const FooterContext = createContext<footerContext>({
  id: 0,
  setId: () => 0,
});

export const Footer = () => {
  const [id, setId] = useState(0);

  return (
    <div className="fixed bottom-[20px] left-1/2 w-full -translate-x-1/2 px-5">
      <div className="flex justify-evenly rounded-[10px] backdrop-blur-[20px] bg-[#1D1D1DB2] border border-solid border-[#387AFF80] ">
        <FooterContext.Provider value={{ id, setId }}>
          <Link to={"/bonds"}>
            <FooterItem
              id={0}
              icon={
                <img
                  src={bondsIcon}
                  width={18}
                  height={22}
                  className="mx-auto"
                />
              }
              title={"bonds"}
            />
          </Link>
          <Link to={"/stake"}>
            <FooterItem
              id={1}
              icon={
                <img
                  src={stakeIcon}
                  width={24}
                  height={22}
                  className="mx-auto"
                />
              }
              title={"stake"}
            />
          </Link>
          <Link to={"/rewards"}>
            <FooterItem
              id={2}
              icon={
                <img
                  src={rewardsIcon}
                  width={22}
                  height={20}
                  className="mx-auto"
                />
              }
              title={"rewards"}
            />
          </Link>
        </FooterContext.Provider>
      </div>
    </div>
  );
};
