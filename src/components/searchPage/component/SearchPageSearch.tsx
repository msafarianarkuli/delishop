import {useCallback, useEffect, useMemo, useState} from "react";
import {CustomInput} from "components/index";
import {IconClose} from "assets/icons";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useRouter} from "next/router";
import {suggestionSearchNameQuery} from "components/searchPage/context/SearchPageDataProvider";

function SearchPageSearch() {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const {pathname, querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  const pushName = useCallback(
    (name: string) => {
      if (name) {
        query.set(suggestionSearchNameQuery, encodeURI(name));
      } else {
        query.delete(suggestionSearchNameQuery);
      }
      let url = pathname;
      if (query.toString()) {
        url += "?" + query.toString();
      }
      router.replace(url);
    },
    [pathname, query, router]
  );

  const nameFromUrl = useMemo(() => {
    const name = query.get(suggestionSearchNameQuery);
    if (router.isReady && name) {
      return decodeURI(name);
    }
    return "";
  }, [query, router.isReady]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      if (text) {
        pushName(text);
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div>
      <CustomInput
        id="search"
        className="input-form inner_box rounded-full border-none px-5 mb-5"
        value={text || nameFromUrl}
        placeholder="جستجو"
        onChange={(event) => {
          const value = event.target.value;
          if (!value) {
            pushName("");
          }
          setText(value);
        }}
        suffix={
          text || nameFromUrl ? (
            <div
              onClick={() => {
                pushName("");
                setText("");
              }}
              className="flex w-5 h-5 items-center justify-center bg-textColorLight rounded-full cursor-pointer"
            >
              <IconClose className="w-2 h-2 text-white" />
            </div>
          ) : (
            <span></span>
          )
        }
      />
    </div>
  );
}

export default SearchPageSearch;
