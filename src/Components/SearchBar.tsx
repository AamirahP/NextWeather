import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  search: (searchCity?: string) => void; // Update the search function signature to accept an optional argument
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ search, city, setCity }) => {
  const handleSearchClick = () => {
    search(city); // Pass the city value to the search function when the icon is clicked
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value); // Update city value when the input changes
  };

  return (
    <div className="topBar">
      <input
        type="text"
        className="cityInput"
        placeholder="Search"
        value={city}
        onChange={handleCityChange} // Update city on input change
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
