import React, {useCallback, useEffect, useMemo, useState} from "react";
import {CustomInput} from "components";
import {IconClose} from "assets/icons";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";
import {addressMapSearchNameQuery} from "view/addressMapSearch/context/AddressMapSearchDataProvider";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

function AddressMapSearchInput() {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const {pathname, querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const type = useTypeColor();

  const pushName = useCallback(
    (name: string) => {
      if (name) {
        query.set(addressMapSearchNameQuery, encodeURI(name));
      } else {
        query.delete(addressMapSearchNameQuery);
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
    const name = query.get(addressMapSearchNameQuery);
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

  const inputClassName = classNames({
    "input-transparent h-[40px] border-0 border-b rounded-none bg-transparent shadow-none": true,
    "input-form-supermarket": type === "supermarket",
  });

  return (
    <>
      <CustomInput
        id="search"
        autoComplete="off"
        className={inputClassName}
        value={text || nameFromUrl}
        placeholder="جستجو"
        suffix={
          text ? (
            <button
              className="flex items-center justify-center w-5 h-5 bg-textColorLight rounded-full"
              onClick={() => {
                pushName("");
                setText("");
              }}
            >
              <IconClose className="w-2 h-2 text-white" />
            </button>
          ) : (
            <span />
          )
        }
        onChange={(e) => {
          const value = e.target.value;
          if (!value) {
            pushName("");
          }
          setText(value);
        }}
      />
    </>
  );
}

export default AddressMapSearchInput;
