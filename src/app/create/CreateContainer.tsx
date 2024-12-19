"use client";

import React, { useState } from 'react';
import Header from './Header';
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { audienceTypeOptions, contentTypeOptions, deliveryMethodOptions, outputTypeOptions, industryTypeOptions } from '@/constants/options';


const CreateContainer = ({ handleGetPrompts, prompt, handleChange }) => {
  return (
    <div className='flex flex-col items-center gap-[32px] max-w-[1300px] mx-auto min-h-[80vh] pt-[0vh]'>
      <Header />
      <div className='flex items-start gap-[20px] flex-wrap w-full'>
        {/* Dropdowns */}
        <Dropdown
          options={contentTypeOptions}
          name="content_type"
          label="Type Of Content"
          onChange={handleChange}
        />
        <Dropdown
          options={audienceTypeOptions}
          name="audience_type"
          label="Type Of Audience"
          onChange={handleChange}
        />
        <Dropdown
          options={deliveryMethodOptions}
          name="delivery_method"
          label="Delivery Method"
          onChange={handleChange}
        />
        <Dropdown
          options={outputTypeOptions}
          name="content_theme"
          label="Content Theme"
          onChange={handleChange}
        />
        <Dropdown
          options={industryTypeOptions}
          name="target_industry"
          label="Target Industry"
          onChange={handleChange}
        />
      </div>
      {/* Generate Button */}
      <div className='mt-[10px]'>
        <Button
          bg={"dark-blue"}
          text="white"
          onClick={() => handleGetPrompts(prompt)}
        >
          Generate
          <Image src={"/Vector.png"} alt="star" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

export default CreateContainer;
