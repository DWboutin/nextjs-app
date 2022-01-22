import fetch from "unfetch";

const fetcher = (params) => (url) => fetch(url, params).then((r) => r.json());

export default fetcher;
