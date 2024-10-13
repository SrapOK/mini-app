import { Page } from "@/components/Page";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { CardRewards } from "@/widgets/CardRewards";

import { List, Text } from "@telegram-apps/telegram-ui";
export const StakePage = () => {
  return (
    <Page back={false}
      >
      <List>
        <Header />
        <CardRewards />
        <div className="flex flex-col">
          <Text
            weight="1" 
            caps={true} 
            className="mx-5"
            style={{
              marginTop: "13px",
              fontSize: "20px"
            }}
          >
            ACHIEVEMENTS
          </Text>
          
          <Text
            weight="3" 
            caps={true} 
            className="mx-5"
            style={{
              fontSize: "8px",
              fontWeight: 400,
              lineHeight: "14px",
              textAlign: "left"

            }}  
          >
            Tasks for increase your np 
          </Text>
        </div>

        <Footer />
      </List>
    </Page>
  );
};
