import okIcon from "./ok.svg";
import tonIcon from "./ton.svg";

export const Achievement = () => {
  return (
    <div className=" mx-2.5 rounded-[10px] h-[61px] max-w-[400px] px-[15px] py-[13px] flex justify-between bg-[#282F43] border border-[#387AFF]">
      <div className="flex justify-between gap-3">
        <div className="flex justify-center align-middle">
          <img src={tonIcon} />
        </div>
        <div className="flex flex-col align-middle text-[10px] leading-3 gap-1.5 my-auto">
          <div className="uppercase font-bold ">
            connect your telegram wallet
          </div>
          <div>+250 NT</div>
        </div>
      </div>
      <div className="flex justify-center align-middle rounded-full bg-[#92FFA2] w-[35px] h-[35px]">
        <img width={16} height={13} src={okIcon} />
      </div>
    </div>
  );
};
