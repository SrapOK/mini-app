import { BondCardListItem } from "@/components/BondCardListItem";
import { data } from "./data";
import { List } from "@telegram-apps/telegram-ui";

export const BondCardList = () => {
  return (
    <div className="flex justify-center">
      <List className=" mx-[20px]">
        {data.map((v, i) => (
          <BondCardListItem
            key={i}
            name={v.name}
            rating={v.rating}
            status={v.status}
            progress={v.progress}
            collected={v.collected}
          />
        ))}
      </List>
    </div>
  );
};
