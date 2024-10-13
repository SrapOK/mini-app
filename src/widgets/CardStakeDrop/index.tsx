import { Card, Select } from "@telegram-apps/telegram-ui";

// import "./CardStakeTotalModule.css";

export const CardStakeDrop = () => {
  return (
        <Card 
            className="Card flex flex-col h-full w-full justify-between p-4 mt-5"
            style={{
                height: 120
            }}
        >
           <Select style={{
            background: '#387AFF'
           }}>
            <option>Hello</option>
            <option>Okay</option>
           </Select>
        </Card> 
  )
};
