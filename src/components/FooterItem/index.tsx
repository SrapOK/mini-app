import { FooterContext } from "@/widgets/Footer";
import { Text } from "@telegram-apps/telegram-ui";
import { FC, ReactNode, useContext } from "react";

interface FooterItemProps {
  id: number;
  icon: ReactNode;
  title: string;
}

export const FooterItem: FC<FooterItemProps> = ({ icon, title, ...props }) => {
  const { id, setId } = useContext(FooterContext);

  console.log(id, props.id);

  let isActive = false;

  if (id == props.id) isActive = true;

  return (
    <div
      onClick={() => setId(props.id)}
      className={`flex mt-2.5 flex-col ${
        isActive ? " text-[#3F88F7]" : " text-white text-"
      }`}
    >
      {icon}

      <div>
        <Text weight="1" className=" text-[10px]" caps={true}>
          {title}
        </Text>
      </div>
    </div>
  );
};
