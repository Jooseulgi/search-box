import { AiOutlineSearch } from "react-icons/ai";
import { SickType } from "../types";
import Loading from "./Loading";

interface Props {
  searchText: string;
  searchResult: SickType[];
  ulRef: React.RefObject<HTMLUListElement>;
  currentIndex: number;
  loading: boolean;
}
export default function SearchList({
  searchText,
  searchResult,
  ulRef,
  currentIndex,
  loading,
}: Props) {
  return (
    <div className="mt-3 px-7 py-5 rounded-2xl bg-white">
      <p className="font-bold">{searchText}</p>
      <h2 className="mt-2 text-sm text-grayB">추천 검색어</h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="mt-2" ref={ulRef}>
          {searchResult.length !== 0 ? (
            searchResult.map((sickData, focusIdx) => (
              <li
                className={`flex items-center my-1 hover:bg-grayE cursor-pointer ${
                  currentIndex === focusIdx && "bg-grayE"
                }`}
                key={sickData.sickCd}
              >
                <AiOutlineSearch className="flex-none text-grayB mr-1" />
                {sickData.sickNm.split(searchText).map((text, idx) => {
                  const num = idx + 1;
                  return sickData.sickNm.split(searchText).length !== num ? (
                    <span key={num}>
                      {text}
                      <strong className="text-blue">{searchText}</strong>
                    </span>
                  ) : (
                    <span key={num}>{text}</span>
                  );
                })}
              </li>
            ))
          ) : (
            <li>데이터가 없습니다.</li>
          )}
        </ul>
      )}
    </div>
  );
}
