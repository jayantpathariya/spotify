"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";

import { BrowseCard } from "@/components/browse-card";

const SearchPage = () => {
  const [value, setValue] = useState("");

  const router = useRouter();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-neutral-200 mt-4">Search</h1>
      <div className="mt-4 relative lg:hidden">
        <GoSearch className="text-2xl text-neutral-900 absolute left-2 top-2" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full outline-none py-2 px-4 pl-10 text-neutral-800 placeholder:text-neutral-800 rounded-md"
          value={value}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
            router.push(`/search/${e.target.value}`);
          }}
        />
      </div>
      <h2 className="mt-4 text-neutral-100 font-semibold">Browse all</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6">
        <BrowseCard color="pink" title="Music" />
        <BrowseCard color="green" title="Podcast" />
        <BrowseCard color="purple" title="Live Events" />
        <BrowseCard color="red" title="Made for you" />
      </div>
    </div>
  );
};

export default SearchPage;
