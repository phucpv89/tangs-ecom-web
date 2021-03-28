/* eslint-disable max-len */
import { isAndroid } from "react-device-detect";

function shareZaloMobile(shareUrl) {
  console.log("shareZaloMobile", shareUrl);
  if (!shareUrl) {
    return;
  }
  let t = encodeURIComponent(shareUrl);
  if (isAndroid) {
    window.location.href = `intent://zaloapp.com/#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=;S.android.intent.extra.TEXT=${t};B.hidePostFeed=false;B.backToSource=true;end`;
  } else {
    window.location.href = `zaloshareext://shareext?url=${t}&type=8&version=1`;
  }
}

let timeout;
export function onceCall(func) {
  console.log("onceCall");
  if (!timeout) {
    timeout = setTimeout(() => {
      timeout = undefined;
    }, 500);
    func();
  }
}

export default {
  shareZaloMobile,
  onceCall,
};
