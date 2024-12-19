"use client";
import { LetterText,CircleUser,Factory } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md"; 

import Dropdown from '@/components/Dropdown';
import Button from '@/components/UI/Button';
import Loader from '@/components/UI/Loader';
import { audienceTypeOptions, contentTypeOptions, deliveryMethodOptions, outputTypeOptions, industryTypeOptions } from '@/constants/options';
import Image from 'next/image';

type Prompt = {
  content_type: string;
  audience_type: string;
  delivery_method: string;
  content_theme: string;
  target_industry: string;
};

const ResponsesContainer = ({
  prompts = [{ prompt: "" }, { prompt: "" }, { prompt: "" }, { prompt: "" }],
  handleSelectPrompt,
  isLoading,
  prompt,
  handleChange,
  handleGetPrompts,
}: {
  prompts: { prompt: string }[];
  handleSelectPrompt: (prompt: string) => void;
  isLoading: boolean;
  prompt: Prompt;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleGetPrompts: (prompt: Prompt) => void;
}) => {
  return (
    <div className=" py-[42px] ml-[110px] px-[10px] w-full">
      <div className="bg-light-purple p-[28px] rounded-xl flex flex-col items-center gap-[20px] w-full">
        <div className="flex justify-between items-start w-full gap-[20px]">
          <Dropdown
            img={<LetterText />}
            options={contentTypeOptions}
            name="content_type"
            label="Type Of Content"
            onChange={handleChange}
            isHorizontal={true}
          />
          <Dropdown
            img={<CircleUser />}
            options={audienceTypeOptions}
            name="audience_type"
            label="Type Of Audience"
            onChange={handleChange}
            isHorizontal={true}
          />
          <Dropdown
            img={<MdOutlineDeliveryDining  size={25}/>}
            options={deliveryMethodOptions}
            name="delivery_method"
            label="Delivery Method"
            onChange={handleChange}
            isHorizontal={true}
          />
          <Dropdown
            img={<MdLightbulbOutline size={25}/>}
            options={outputTypeOptions}
            name="content_theme"
            label="Content Theme"
            onChange={handleChange}
            isHorizontal={true}
          />
          <Dropdown
            img={<Factory />}
            options={industryTypeOptions}
            name="target_industry"
            label="Target Industry"
            onChange={handleChange}
            isHorizontal={true}
          />
        </div>
        <Button bg={"dark-blue"} text="white" onClick={() => handleGetPrompts(prompt)}>
          Generate
          <Image src={"/Vector.png"} alt="star"   width={20} height={20} />
        </Button>
      </div>
      <div>
        <h1 className="font-bold text-[28px] pt-[40px] pb-[30px] text-left">Suggested for you</h1>
        <div className="flex flex-wrap justify-between gap-[30px]">
          {isLoading ? (
            Array.from(["", "", "", ""]).map((ele, i) => (
                <div
                  className="max-w-[48%] basis-[48%] text-left border rounded-xl p-[30px] shadow-sm"
                  key={i}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-2 bolt"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <Loader />
                  <p
                    className="border-b-2 border-black ml-auto max-w-fit cursor-pointer"
                    // onClick={() => handleSelectPrompt(ele.prompt)}
                  >
                    Ask this
                  </p>
                </div>
            
            ))
          ) : (
            prompts.map((ele, i) => (
              ele.prompt ? (
                <div
                  className="max-w-[48%] basis-[48%] text-left border rounded-lg p-[30px] shadow-sm"
                  key={i}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-2 bolt"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#e3f207" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" mb-5 lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  <p>{ele.prompt}</p>
                  <p
                    className="border-b-2 mt-2 border-black ml-auto max-w-fit cursor-pointer"
                    onClick={() => handleSelectPrompt(ele.prompt)}
                  >
                    Ask this
                  </p>
                </div>
              ) : (
                <Loader key={i} />
              )
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsesContainer;
