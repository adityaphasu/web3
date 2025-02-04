import { useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { fundingTopics, fundingTypes } from "@/data/filterOptions";

const GrantCard = ({ grant }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const createLabelsMap = (items) => {
    return items.reduce((acc, item) => {
      acc[item.value] = item.label;
      return acc;
    }, {});
  };

  const fundingTopicLabels = createLabelsMap(fundingTopics);
  const fundingTypeLabels = createLabelsMap(fundingTypes);

  const getLabels = (values, labelsMap) => {
    return values.map((value) => labelsMap[value]).join(", ");
  };

  return (
    <div className="rounded p-5 bg-[#151226]/10 text-white backdrop-blur-[3px] border border-purple-500/20">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              src="https://www.google.com/s2/favicons?domain=https://thankarb.com/&sz=128"
              alt=""
              className="size-11"
            />
            <h3 className="text-lg font-semibold">{grant.grantProgramName}</h3>
          </div>
          <div className="flex justify-evenly md:justify-between flex-1 items-center">
            <Badge className="bg-[#00bbfc] hover:bg-[#00bbfc]">{grant.status}</Badge>
            <span className="text-gray-400 text-[0.95rem]">{grant.date}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex text-gray-400 gap-2.5 text-[0.95rem]">
              <span>
                <span className="text-white font-semibold">Ecosystem: </span>
                {grant.ecosystem}
              </span>
              <Separator orientation="vertical" className="bg-gray-400" />
              <span>
                <span className="text-white font-semibold">Total Funding: </span>
                {grant.totalFundingAvailable}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Topics for Funding:</h3>
              <p className="text-gray-400 text-sm">
                {getLabels(grant.fundingTopics, fundingTopicLabels)}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Button
              variant="ghost"
              className="p-0 group [&_svg]:size-7 hover:bg-transparent"
              onClick={() => setCardOpen(!cardOpen)}>
              {cardOpen ? (
                <CircleMinus className="text-[#00bbfc] group-hover:text-white  transition-colors" />
              ) : (
                <CirclePlus className=" text-[#00bbfc] group-hover:text-white transition-colors" />
              )}
            </Button>
            <a
              href={grant.website}
              className="bg-[#00bbfc] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-sky-600 transition-colors">
              Apply
            </a>
          </div>
        </div>
      </div>
      {cardOpen && (
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Description:</h3>
            <p className="text-gray-400 text-sm">{grant.description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-2">
              <h3 className="text-sm font-semibold">Funding Type:</h3>
              <p className="text-gray-400 text-sm">
                {getLabels([grant.fundingType], fundingTypeLabels)}
              </p>
            </div>
            {grant.minFunding && (
              <div className="flex gap-2">
                <h3 className="text-sm font-semibold">Min Funding:</h3>
                <p className="text-gray-400 text-sm">{grant.minFunding}</p>
              </div>
            )}
            {grant.maxFunding && (
              <div className="flex gap-2">
                <h3 className="text-sm font-semibold">Max Funding:</h3>
                <p className="text-gray-400 text-sm">{grant.maxFunding}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default GrantCard;
