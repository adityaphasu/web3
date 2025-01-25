import { useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const GrantCard = ({ grant }) => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="rounded p-5 bg-[#151226]/10 text-white backdrop-blur-[3px] border border-purple-500/20">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2.5 md:max-w-[45rem]">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{grant.grantProgramName}</h3>
            <Badge className="bg-[#00bbfc] hover:bg-[#00bbfc]">{grant.status}</Badge>
          </div>
          <div className="flex text-gray-400 gap-2.5 text-[0.95rem]">
            <span>{grant.ecosystem}</span>
            <Separator orientation="vertical" className="bg-gray-400" />
            <span>{grant.totalFundingAvailable}</span>
          </div>
          <div>
            <h3 className="text-sm">Topics for Funding:</h3>
            <p className="text-gray-400 text-sm">{grant.topicsForFunding}</p>
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
      {cardOpen && (
        <div className="flex flex-col mt-4">
          <h3 className="text-sm font-semibold">Description:</h3>
          <p className="text-gray-400 text-sm">{grant.description}</p>
        </div>
      )}
    </div>
  );
};
export default GrantCard;
