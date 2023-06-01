import {IGetSuggestionSearchData, IGetSuggestionSearchRes} from "types/interfaceSuggestionSearch";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IGetSuggestionSearch {
  params?: object;
}

type TGetSuggestionSearch = (props: IGetSuggestionSearch) => Promise<IGetSuggestionSearchData>;

const getSuggestionSearch: TGetSuggestionSearch = async (props) => {
  const {params} = props;
  return axiosService<IGetSuggestionSearchRes>({url: API.GET_SUGGESTION_SEARCH, method: "get", params}).then(
    (res) => res.data.data
  );
};

export default getSuggestionSearch;
