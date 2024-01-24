import React from "react";
import Star from "./LogoIcon";

const Header = () => {
  return (
    <div className="z-20 flex h-20 w-full items-center gap-2 bg-gray-9 px-6 lg:px-20">
      <div className="flex shrink-0 items-center justify-center rounded-full bg-blues-1 p-2">
        <Star className="h-2 text-gray-1" />
      </div>
      <h1 className="text-3xl font-black text-gray-1 md:text-4xl">CineQuest</h1>
    </div>
  );
};

export default Header;
