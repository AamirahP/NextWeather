import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  search: (searchCity?: string) => void;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ search, city, setCity }) => {
  const handleSearchClick = () => {
    search(city);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="topBar">
      <input
        type="text"
        className="cityInput"
        placeholder="Search"
        value={city}
        onChange={handleCityChange}
      />
      <AiOutlineSearch
        className="searchIcon"
        size="20"
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchBar;
