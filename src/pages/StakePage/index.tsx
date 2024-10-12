import { Page } from "@/components/Page";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

import { List } from "@telegram-apps/telegram-ui";
export const StakePage = () => {
  return (
    <Page back={false}>
      <List>
        <Header />

        <Footer />
      </List>
    </Page>
  );
};
