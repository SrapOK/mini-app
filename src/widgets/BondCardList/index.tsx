import { BondCard } from "@/components/BondCard";
import { data } from "./data";
import { List } from "@telegram-apps/telegram-ui";

export const BondCardList = () => {
  return (
    <List>
      {data.map((v, i) => (
        <BondCard
          key={i}
          name={v.name}
          rating={v.rating}
          status={v.status}
          progress={v.progress}
          collected={v.collected}
        />
      ))}
    </List>
  );
};
