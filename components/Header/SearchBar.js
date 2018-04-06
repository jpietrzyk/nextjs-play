import SearchForm from './SearchForm'

const SearchBar = () => (
  <div className='searchBar'>
    <SearchForm />
    <style jsx>{`
      .searchBar {
        float: right;
      }
    `}</style>
  </div>
)

export default SearchBar
