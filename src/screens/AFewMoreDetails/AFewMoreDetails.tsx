import { useState } from "react";

export const AFewMoreDetails = (): JSX.Element => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [bvn, setBvn] = useState("");
  const [rcBn, setRcBn] = useState("");

  return (
    <div
      className="relative w-[360px] h-[800px] bg-[#040c24]"
      data-model-id="417:8169"
    >
      <header className="flex w-full h-16 items-center justify-between pl-5 pr-4 py-3 absolute top-24 left-0 bg-transparent">
        <div className="relative w-28 h-7">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/NVBaSodz/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/NVBaSodz/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/NVBaSodz/img/group-2@2x.png"
          />
        </div>

        <div className="inline-flex h-8 items-center justify-center gap-1 pt-[var(--collection-1-0)] pb-[var(--collection-1-0)] px-1 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/NVBaSodz/img/user.svg"
          />
        </div>
      </header>

      <div className="flex flex-col w-full items-start px-5 py-0 absolute top-40 left-0">
        <div className="flex flex-col items-start pt-2 pb-9 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
            A few more details
          </h1>

          <div className="relative self-stretch w-full h-0.5" />

          <p className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
            For pre–approvals and personalized offers
          </p>

          <div className="relative self-stretch w-full h-5" />

          <div className="flex flex-col items-start gap-2.5 pl-0 pr-20 py-0 relative self-stretch w-full flex-[0_0_auto] bg-deepcloudyblue-100 rounded-[30px]">
            <div className="relative self-stretch w-full h-1 bg-[#ffffff] rounded-[30px]" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor="fullName"
            className="inline-flex h-5 items-center gap-1 pl-px pr-0 py-0 relative font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] whitespace-nowrap [font-style:var(--caption-m-medium-font-style)]"
          >
            Full name, as in your ID
          </label>

          <div className="flex h-[52px] items-center px-4 py-0 relative self-stretch w-full bg-deepcloudyblue-100 rounded-[14px]">
            <input
              id="fullName"
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] p-0 w-full outline-none"
              placeholder="Full name, as in your ID"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor="email"
            className="inline-flex h-5 items-center gap-1 pl-px pr-0 py-0 relative"
          >
            <span className="relative w-fit font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] whitespace-nowrap [font-style:var(--caption-m-medium-font-style)]">
              E–mail
            </span>
          </label>

          <div className="flex h-[52px] items-center px-4 py-0 relative self-stretch w-full bg-deepcloudyblue-100 rounded-[14px]">
            <input
              id="email"
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] p-0 w-full outline-none"
              placeholder="business@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor="bvn"
            className="inline-flex h-5 items-center gap-1 pl-px pr-0 py-0 relative"
          >
            <span className="relative w-fit font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] whitespace-nowrap [font-style:var(--caption-m-medium-font-style)]">
              BVN
            </span>
          </label>

          <div className="flex h-[52px] items-center px-4 py-0 relative self-stretch w-full bg-deepcloudyblue-100 rounded-[14px]">
            <input
              id="bvn"
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] p-0 w-full outline-none"
              placeholder="00000000000"
              type="text"
              value={bvn}
              onChange={(e) => setBvn(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <label
            htmlFor="rcBn"
            className="inline-flex h-5 items-center gap-1 pl-px pr-0 py-0 relative"
          >
            <span className="relative w-fit font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] whitespace-nowrap [font-style:var(--caption-m-medium-font-style)]">
              RC or BN number, if you have
            </span>
          </label>

          <div className="flex h-[52px] items-center px-4 py-0 relative self-stretch w-full bg-deepcloudyblue-100 rounded-[14px]">
            <input
              id="rcBn"
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] border-[none] [background:none] mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-gray-70 text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] p-0 w-full outline-none"
              placeholder="RC 0000000 or BN 0000000"
              type="text"
              value={rcBn}
              onChange={(e) => setRcBn(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-1 pl-0.5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] [font-style:var(--caption-m-medium-font-style)]">
              Or we&apos;ll help you get one — just one more early access perk
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[360px] items-start px-5 py-4 absolute left-0 bottom-0 bg-deepblue-140 rounded-[24px_24px_0px_0px]">
        <button
          type="button"
          className="flex h-[52px] items-center justify-center gap-1 px-5 py-2 relative self-stretch w-full bg-[#ffffff] rounded-[14px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] cursor-pointer"
          onClick={() => {}}
        >
          <div className="inline-flex items-center justify-center gap-2.5 pt-0 pb-0.5 px-0 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-[#000000] text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Save
            </span>
          </div>
        </button>
      </div>

      <div className="fixed w-full top-0 left-0 h-24 bg-white shadow-[0px_1px_4px_#00000033]">
        <div className="absolute w-full h-full top-0 left-0 bg-white" />

        <img
          className="absolute top-[59px] left-3 w-[21px] h-[22px]"
          alt="Home"
          src="https://c.animaapp.com/NVBaSodz/img/home.svg"
        />

        <div className="absolute top-[52px] left-[45px] w-[228px] h-9 flex items-center bg-androidchromeaddress-field-background-light rounded-[18px] overflow-hidden">
          <div className="inline-flex h-[13px] ml-[13px] w-[186px] relative items-start gap-2.5">
            <img
              className="relative w-2.5 h-[13px]"
              alt="Vector"
              src="https://c.animaapp.com/NVBaSodz/img/vector.svg"
            />
            <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[13px] whitespace-nowrap">
              renmoney/business.com
            </div>
          </div>
        </div>

        <img
          className="absolute w-[20.28%] top-[calc(50.00%_+_11px)] left-[79.72%] h-[22px]"
          alt="Chrome tabs"
          src="https://c.animaapp.com/NVBaSodz/img/chrome-tabs.svg"
        />

        <img
          className="absolute top-[58px] left-[323px] w-6 h-6"
          alt="More"
          src="https://c.animaapp.com/NVBaSodz/img/more.svg"
        />

        <div className="absolute top-4 left-0 w-[360px] h-6 flex">
          <div className="mt-1 w-[42px] ml-3.5 flex opacity-90">
            <div className="flex items-end w-10 h-4 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-androidtext-secondary text-[13px] tracking-[0] leading-[normal]">
              10:00
            </div>
          </div>

          <img
            className="ml-[242px] mt-[5px] w-3.5 h-3.5"
            alt="Signal cellular"
            src="https://c.animaapp.com/NVBaSodz/img/signal-cellular.svg"
          />

          <img
            className="ml-1 mt-[5px] w-3.5 h-3.5"
            alt="Signal wifi"
            src="https://c.animaapp.com/NVBaSodz/img/signal-wifi.svg"
          />

          <img
            className="mt-[5px] w-3.5 h-3.5 ml-0.5"
            alt="Battery full"
            src="https://c.animaapp.com/NVBaSodz/img/battery-full.svg"
          />
        </div>
      </div>
    </div>
  );
};
