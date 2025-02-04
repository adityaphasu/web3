import { useState } from "react";
import { Input } from "./ui/input";
import { EcosystemDropdown } from "./EcosystemDropdown";
import GrantCard from "./GrantCard";
import { StatusDropdown } from "./StatusDropdown";
import { grantPrograms } from "@/data/mockData";
import { FundingTopicsDropdown } from "./FundingTopicsDropdown";
import { FundingTypeDropdown } from "./FundingTypeDropdown";
import { Button } from "./ui/button";

const Board = () => {
  const [selectedEcosystems, setSelectedEcosystems] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedFundingTopics, setSelectedFundingTopics] = useState([]);
  const [selectedFundingTypes, setSelectedFundingTypes] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState([]);

  // TODO: Implement Search for Search bar based on what you want the search to be based on.
  // TODO: Implement Sort for Sort By buttons

  // toggling the sortby buttons
  const toggleSortBy = (criteria) => {
    setSelectedSortBy((current) =>
      current.includes(criteria)
        ? current.filter((value) => value !== criteria)
        : [...current, criteria]
    );
  };

  // filtering
  const filteredGrants = grantPrograms.filter(
    (grant) =>
      (selectedEcosystems.length === 0 ||
        selectedEcosystems.includes(grant.ecosystem.toLowerCase())) &&
      (selectedStatuses.length === 0 || selectedStatuses.includes(grant.status.toLowerCase())) &&
      (selectedFundingTopics.length === 0 ||
        grant.fundingTopics.some((topic) => selectedFundingTopics.includes(topic.toLowerCase()))) &&
      (selectedFundingTypes.length === 0 ||
        selectedFundingTypes.includes(grant.fundingType.toLowerCase()))
  );
  // .sort(); // do sort logic here for the sort by buttons

  return (
    <div>
      <div className="my-5 flex flex-col gap-4 p-5 rounded-lg justify-center backdrop-blur bg-white/5">
        {/* Search Bar */}
        <Input
          placeholder="Search Grants..."
          className="bg-[#151226]/50 border-[#151226] text-gray-400"
        />

        {/* Filter Dropdowns */}
        <div className="flex flex-col gap-4 md:flex-row">
          <EcosystemDropdown onChange={setSelectedEcosystems} />
          <StatusDropdown onChange={setSelectedStatuses} />
          <FundingTopicsDropdown onChange={setSelectedFundingTopics} />
          <FundingTypeDropdown onChange={setSelectedFundingTypes} />
        </div>

        {/* Sort By Buttons */}
        <div className="ml-2 flex gap-3 items-center flex-wrap">
          <h3 className="font-semibold text-white">Sort By:</h3>
          <Button
            className={`h-auto bg-[#151226]/70 text-white hover:bg-[#151226] ${
              selectedSortBy.includes("mostRecent") && "bg-[#00bbfc] hover:bg-[#00bbfc]/50"
            }`}
            onClick={() => toggleSortBy("mostRecent")}>
            Most Recent
          </Button>
          <Button
            className={`h-auto bg-[#151226]/70 text-white hover:bg-[#151226] ${
              selectedSortBy.includes("funding") && "bg-[#00bbfc] hover:bg-[#00bbfc]/50"
            }`}
            onClick={() => toggleSortBy("funding")}>
            Funding
          </Button>
        </div>
      </div>

      {/* Rendering the cards*/}
      <div className="grid grid-cols-1 gap-4">
        {filteredGrants.map((grant) => (
          <GrantCard key={grant.grantProgramName} grant={grant} />
        ))}
      </div>
    </div>
  );
};

export default Board;
