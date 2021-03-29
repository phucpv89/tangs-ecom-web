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
  onceCall,
};
