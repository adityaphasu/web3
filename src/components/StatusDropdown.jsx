import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function StatusDropdown({ defaultSelectedValues, onChange, statuses }) {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(defaultSelectedValues);

  useEffect(() => {
    onChange(selectedValues);
  }, [selectedValues, onChange]);

  const handleSelect = (currentValue) => {
    if (currentValue === "all") {
      setSelectedValues(
        selectedValues.length === statuses.length ? [] : statuses.map((s) => s.value)
      );
    } else {
      setSelectedValues((current) =>
        current.includes(currentValue)
          ? current.filter((value) => value !== currentValue)
          : [...current, currentValue]
      );
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[300px] justify-between bg-[#151226]/70 text-white hover:bg-[#151226] hover:text-white border-[#151226]">
          <span>Status</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] p-0 bg-[#151226]">
        <Command className="bg-[#151226] text-white">
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup className="text-white border-none">
              <CommandItem onSelect={() => handleSelect("all")} className="cursor-pointer">
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedValues.length === statuses.length ? "opacity-100" : "opacity-0"
                  )}
                />
                Select All
              </CommandItem>
              {statuses.map((status) => (
                <CommandItem
                  key={status.value}
                  onSelect={() => handleSelect(status.value)}
                  className="cursor-pointer">
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValues.includes(status.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {status.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
