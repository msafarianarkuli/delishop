import SearchPageHeader from "components/searchPage/component/SearchPageHeader";
import SearchPageDataProvider from "components/searchPage/context/SearchPageDataProvider";
import SearchPageSearch from "components/searchPage/component/SearchPageSearch";
import SearchPageVendorsList from "components/searchPage/component/SearchPageVendorsList";
import SearchPageProductsList from "components/searchPage/component/SearchPageProductsList";
import SearchPageNotfound from "components/searchPage/component/SearchPageNotfound";

function SearchPage() {
  return (
    <SearchPageDataProvider>
      <SearchPageHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SearchPageSearch />
        <SearchPageNotfound />
        <SearchPageVendorsList />
        <SearchPageProductsList />
      </div>
    </SearchPageDataProvider>
  );
}

export default SearchPage;
