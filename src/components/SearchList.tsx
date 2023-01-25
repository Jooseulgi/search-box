import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SickType } from "../types";

interface Props {
  searchText: string;
  searchResult: SickType[];
}
function SearchList({ searchText, searchResult }: Props) {
  const HighlightText = (text: string) => {
    const highlight = text
      .replaceAll(searchText, `/g${searchText}/g`)
      .split("/g")
      .map((el, idx) => {
        const num = idx + 1;
        return el === searchText ? (
          <strong key={num} className="text-blue">
            {searchText}
          </strong>
        ) : (
          el
        );
      });
    return highlight;
  };

  return (
    <div className="mt-3 px-7 py-5 rounded-2xl bg-white">
      <p className="font-bold">{searchText}</p>
      <h2 className="mt-2 text-sm text-grayB">추천 검색어</h2>
      <ul className="mt-2">
        {searchResult.length !== 0 ? (
          searchResult.map((sickData) => (
            <li
              className="flex items-center my-1 hover:bg-grayE cursor-pointer"
              key={sickData.sickCd}
            >
              <AiOutlineSearch className="flex-none text-grayB mr-1" />
              <span>{HighlightText(sickData.sickNm)}</span>
            </li>
          ))
        ) : (
          <li>데이터가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchList;
