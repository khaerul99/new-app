import { Input } from "antd";
import React from "react";
import { useArticle } from "../../hooks/useArticle";
import { Link, useMatch } from "react-router-dom"; 

const { Search } = Input;

export interface NavbarProps {
  inputValue: string;
  onSearch: (value: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Navbar: React.FC = () => {
  const { inputValue, onSearch, handleInputChange } = useArticle("indonesia");
   const isDetailPage = useMatch("/article/:title");
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="flex flex-col items-center justify-between w-full p-5 mx-auto bg-white shadow-2xl md:h-20 md:flex-row max-w-7xl">
        <div className="flex items-center mt-2 ">
        <h1 className="items-center text-3xl font-bold ">News APP</h1>
        </div>
        <div className="flex items-center justify-between w-3/4 gap-4 mt-4 md:mt-0 md:w-auto">

        <div className="">
          <Search
            placeholder="Cari berita..."
            onSearch={onSearch}
            onChange={handleInputChange}
            value={inputValue}
            enterButton
            />
        </div>

         {isDetailPage && (
             <div className="">
            <Link to={"/"} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Kembali
            </Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
