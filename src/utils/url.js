import queryString from "querystring";
import { CUSTOM_PARAMS, TRACKING_PARAMS } from "src/constants";

function generateURLWithParams(url, params) {
  const stringify = queryString.stringify(params);
  if (!stringify) {
    return url;
  }
  if (url.includes("?")) {
    return `${url}&${stringify}`;
  }
  return `${url}?${stringify}`;
}

function generateURLWithEncodedParams(url, params) {
  const stringify = queryString.stringify(params);
  if (!stringify) {
    return url;
  }
  const encodeParams = encodeURIComponent(stringify);
  if (url.includes("%3F")) {
    return `${url}%26${encodeParams}`;
  }
  return `${url}%3F${encodeParams}`;
}

function buildCampaignDeepLinkFromLocation(location) {
  const deepLink = process.env.REACT_APP_HOME_URL;
  if (!location || !location.search) {
    return deepLink;
  }
  const resultParams = {};
  const searchParams = new URLSearchParams(location.search);

  searchParams.forEach((value, key) => {
    if (TRACKING_PARAMS.includes(key)) {
      resultParams[key] = value;
    }
    if (CUSTOM_PARAMS.includes(key)) {
      resultParams[key] = value;
    }
  });

  if (process.env.REACT_APP_ENV === "production") {
    return generateURLWithParams(deepLink, resultParams);
  }
  return generateURLWithEncodedParams(deepLink, resultParams);
}

export default {
  buildCampaignDeepLinkFromLocation,
};
