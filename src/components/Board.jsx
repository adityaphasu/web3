import { useState } from "react";
import { grantPrograms } from "@/data/mockData";
import { EcosystemDropdown } from "./EcosystemDropdown";
import GrantCard from "./GrantCard";
import { StatusDropdown } from "./StatusDropdown";

const ecosystems = [
  { value: "other", label: "Other" },
  { value: "ethereum", label: "Ethereum" },
  { value: "cosmos", label: "Cosmos" },
  { value: "stellar", label: "Stellar" },
  { value: "aptos", label: "Aptos" },
  { value: "eu", label: "EU" },
  { value: "xion", label: "XION" },
  { value: "linea", label: "Linea" },
  { value: "polkadot", label: "Polkadot" },
  { value: "iota", label: "IOTA" },
  { value: "kadena", label: "Kadena" },
  { value: "nibiru", label: "Nibiru" },
  { value: "hedera", label: "Hedera" },
  { value: "filecoin", label: "Filecoin" },
  { value: "fuel", label: "Fuel" },
];

const statuses = [
  { value: "active", label: "Active" },
  { value: "upcoming", label: "Upcoming" },
];

const Board = () => {
  const [selectedEcosystems, setSelectedEcosystems] = useState(ecosystems.map((e) => e.value));
  const [selectedStatuses, setSelectedStatuses] = useState(statuses.map((s) => s.value));

  const filteredGrants = grantPrograms.filter(
    (grant) =>
      selectedEcosystems.includes(grant.ecosystem.toLowerCase()) &&
      selectedStatuses.includes(grant.status.toLowerCase())
  );

  return (
    <div className="w-[80%] mx-auto my-6">
      <div className="flex items-center pt-3 gap-10 font-medium text-white mb-0.5 border-b border-gray-600">
        <a href="" className="relative">
          Search Grants
          <span className="w-full absolute bg-[#00bbfc] h-0.5 left-0 bottom-0"></span>
        </a>
      </div>
      <div className="my-5 flex gap-4">
        <EcosystemDropdown
          ecosystems={ecosystems}
          defaultSelectedValues={ecosystems.map((e) => e.value)}
          onChange={setSelectedEcosystems}
        />
        <StatusDropdown
          statuses={statuses}
          defaultSelectedValues={statuses.map((s) => s.value)}
          onChange={setSelectedStatuses}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredGrants.map((grant) => (
          <GrantCard key={grant.grantProgramName} grant={grant} />
        ))}
      </div>
    </div>
  );
};

export default Board;
