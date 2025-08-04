"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const { replace } = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("search") || "");
  }, []);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 500);

  return (
    <Input
      type="text"
      placeholder="Search Camping..."
      className="max-w-xs"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
};
export default Search;
