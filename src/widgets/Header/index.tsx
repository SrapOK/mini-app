import { Section, Cell, Image } from "@telegram-apps/telegram-ui";

import { Logo } from "@/components/Logo";
import { Link } from "@/components/Link/Link.tsx";

import tonSvg from "./ton.svg";

export const Header = () => {
  return (
    <Section
      header="Features"
      footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
    >
      <Cell>
        <Logo />
      </Cell>
      <Link to="/ton-connect">
        <Cell
          before={<Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />}
          subtitle="Connect your TON wallet"
          multiline={false}
        >
          TON Connect
        </Cell>
      </Link>
    </Section>
  );
};
