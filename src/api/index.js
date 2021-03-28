import requestApi from "./config";

function ping(params) {
  return requestApi("ping", params);
}

export default {
  ping,
};

export { default as ERROR_CODE } from "./ErrorCode";
