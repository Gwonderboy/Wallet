import React, { FC } from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  body: string;
}

const FeaturesCard: FC<Props> = ({ image, title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-[32px] justify-center max-w-[314px] p-8">
        <div className="flex justify-center m-auto p-4 bg-indigo-500 rounded-full w-[100px] h-[100px]">

      <Image src={image} alt="" width={50} height={50} />
        </div>
      <p className="text-[26px] text-center leading-8 font-bold mt-5">{title}</p>
      <p className="text-[18px] text-center leading-8 mt-7">{body}</p>
    </div>
  );
};

export default FeaturesCard;
