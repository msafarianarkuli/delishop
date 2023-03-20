import {IGetSuggestionSearchData, IGetSuggestionSearchRes} from "types/interfaceSuggestionSearch";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

type TGetSuggestionSearch = (params?: object) => Promise<IGetSuggestionSearchData>;

const getSuggestionSearch: TGetSuggestionSearch = async (params) => {
  return axiosService<IGetSuggestionSearchRes>({url: API.GET_SUGGESTION_SEARCH, method: "get", params}).then(
    (res) => res.data.data
  );
};

export default getSuggestionSearch;
