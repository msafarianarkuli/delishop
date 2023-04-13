import {Method} from "axios";

interface IFetchService {
  url: string;
  method: Method;
  headers?: HeadersInit;
  body?: BodyInit | null;
  params?: {[x: string]: any};
}

async function fetchService<Response = any>(props: IFetchService) {
  const {url, method, headers, body, params} = props;
  let query = "";
  if (params && Object.keys(params)) {
    const tmp: string[] = [];
    for (const [key, value] of Object.entries(params)) {
      tmp.push(`${key}=${value}`);
    }
    const tmpQuery = tmp.join("&");
    if (tmpQuery) {
      query = "?" + tmpQuery;
    }
  }
  const tmpUrl = url + query;
  try {
    const res = await fetch(tmpUrl, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });
    const data = await res.json();
    if (res.status >= 200 && res.status < 300) {
      const tmpData: Response = data;
      return Promise.resolve(tmpData);
    } else {
      return Promise.reject({
        data,
        status: res.status,
      });
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

export default fetchService;
