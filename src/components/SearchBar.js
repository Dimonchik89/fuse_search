
import "../styles/search.css";

const SearchBar = ({onChange, placeholder}) => {

    return (
        <div className="Search">
            <span className="SearchSpan">
                {/* <FaSearch /> */}
            </span>
            <input
                className="SearchInput"
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}
export default SearchBar;