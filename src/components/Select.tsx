import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment } from "react";

import ToolTip from "./ToolTip";

interface SelectProps {
  selected: string;
  options: string[];
  tip?: string;
  onChange: (selected: string) => void;
}

export default function Select({
  selected,
  options,
  tip,
  onChange,
}: SelectProps) {
  function ListBoxButton() {
    return (
      <Listbox.Button className="group peer flex w-20 items-center justify-between rounded px-2 capitalize transition-all hover:bg-gray-200 focus-visible:bg-gray-200 ui-open:bg-gray-200">
        {selected}
        <Icon
          className="hidden group-hover:flex group-focus-visible:flex ui-open:flex"
          aria-hidden="true"
          icon="ep:arrow-down-bold"
        />
      </Listbox.Button>
    );
  }

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative w-8">
        {tip ? (
          <ToolTip tip={tip}>
            <ListBoxButton />
          </ToolTip>
        ) : (
          <ListBoxButton />
        )}
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        >
          <Listbox.Options className="absolute left-0 z-40 mt-1 flex w-20 flex-col rounded-md border-2 border-gray-300 bg-white py-1 shadow">
            {options.map((item) => (
              <Listbox.Option key={item} value={item} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`${active ? "text-primary" : "text-current"}
                    ${selected ? "text-primary" : ""}
                    box-content flex cursor-pointer items-center justify-between px-[6px] capitalize transition-all hover:bg-gray-200 focus:z-10 focus:bg-gray-200 ui-active:bg-gray-200`}
                  >
                    {item}
                    {selected && <Icon aria-hidden="true" icon="ep:select" />}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
