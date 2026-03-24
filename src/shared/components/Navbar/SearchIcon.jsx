import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../Search";

const SearchIcon = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  function handleSearchOpen() {
    setSearchOpen(true);
  }
  return (
    <>
      <AiOutlineSearch
        className=" cursor-pointer"
        size={28}
        onClick={handleSearchOpen}
      />
      {searchOpen && <Search setSearchOpen={setSearchOpen} />}
    </>
  );
};

export default SearchIcon;
