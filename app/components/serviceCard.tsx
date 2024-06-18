import React, { FC } from "react";
import Image from "next/image";
import { Icon } from "../assets";

interface Props {
  title: string;
  body: string;
}

const ServiceCard: FC<Props> = ({ title, body }) => {
  return (
    <div className="flex gap-3 align-start">
      <Image src={Icon} alt="" width={30} height={30} />
      <div className="text-left">
        <p className="text-[30px] leading-8 font-semibold">
          {title}
        </p>
        <p className="text-[18px] leading-8 mt-3">{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
