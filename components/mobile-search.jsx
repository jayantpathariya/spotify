"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const MobileSearch = (query) => {
  const [value, setValue] = useState(
    query?.query ? query?.query?.replaceAll("%20", " ") : ""
  );

  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
    router.push(`/search/${e.target.value}`);
  };

  return (
    <input
      type="text"
      placeholder="What do you want to listen to?"
      className="w-full outline-none py-2 pl-10 pr-8 text-neutral-800 placeholder:text-neutral-800 rounded-md"
      value={value}
      autoFocus
      onChange={handleChange}
    />
  );
};
