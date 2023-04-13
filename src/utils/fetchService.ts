import {Method} from "axios";

interface IFetchService {
  url: string;
  method: Method;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

const fetchService = async (props: IFetchService) => {
  const {url, method, headers, body} = props;
  try {
    const res = await fetch(url, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve(await res.json());
    } else {
      return Promise.reject(await res.json());
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export default fetchService;
