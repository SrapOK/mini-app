import { Progress, Text } from "@telegram-apps/telegram-ui";
import { FC } from "react";

import star from "./star.svg";
import point from "./point.svg";

type status = "active" | "finished";

export interface BondCardProps {
  name: string;
  rating: number;
  status: status;
  progress: number;
  collected: number;
}

export const BondCard: FC<BondCardProps> = ({
  name,
  rating,
  status,
  progress,
  collected,
}) => {
  return (
    <div className="border border-[#387AFF] w-full max-h-[84px] mx-[15px] my-[10px] rounded-[15px] bg-[#282F43]">
      <Text weight="1" caps={true} color="#FFFFFF">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <div>{name}</div>
              <div>
                {rating} <img src={star} />
              </div>
              <div>{progress}% collected</div>
            </div>
            <div>
              <img src={point} />
              {status}
            </div>
          </div>
          <div>
            <Progress value={progress} />
          </div>
          <div className="flex justify-between">
            <div>% APR | Time</div>
            <div>{collected} tston</div>
          </div>
        </div>
      </Text>
    </div>
  );
};
