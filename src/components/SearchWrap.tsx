import { ChangeEvent, useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import SearchList from './SearchList';
import { SickType } from '../types';
import getSickResults from '../hooks/useSearch';
import useKeyboard from '../hooks/useKeyboard';

export default function SearchWrap() {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SickType[]>([]);
  const [currentIndex, ulRef, handleKeyPress, setCurrentIndex] = useKeyboard(
    searchResult.length,
    setSearchText,
  );

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentIndex(-1);
  };

  useEffect(() => {
    if (searchText.trim().length === 0) return undefined;
    setLoading(true);
    const debounce = setTimeout(async () => {
      const { data } = await getSickResults(searchText, 7);
      setSearchResult(data);
      setLoading(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchText]);

  return (
    <div className="flex justify-center pt-20 w-screen h-screen bg-sky">
      <div className="w-128">
        <h1 className="text-4xl font-bold text-center">
          <span className="block">국내 모든 임상시험 검색하고</span>
          <span className="block mt-5">온라인으로 참여하기</span>
        </h1>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          handleChangeText={handleChangeText}
          onKeyDown={handleKeyPress}
        />
        {searchText && (
          <SearchList
            searchText={searchText}
            searchResult={searchResult}
            ulRef={ulRef}
            currentIndex={currentIndex}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}
