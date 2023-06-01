import {IGetSuggestionSearchData, IGetSuggestionSearchRes} from "types/interfaceSuggestionSearch";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {paginationCalc} from "utils/utils";

interface IGetSuggestionSearch {
  pageParam?: number;
  count?: number;
  params?: object;
}

type TGetSuggestionSearch = (props: IGetSuggestionSearch) => Promise<IGetSuggestionSearchData>;

const getSuggestionSearch: TGetSuggestionSearch = async (props) => {
  const {params, pageParam, count} = props;
  const {take, skip} = paginationCalc({page: pageParam, count});
  const tmpParams = {
    skip,
    take,
    ...params,
  };
  return axiosService<IGetSuggestionSearchRes>({url: API.GET_SUGGESTION_SEARCH, method: "get", params: tmpParams}).then(
    (res) => res.data.data
  );
};

export default getSuggestionSearch;
