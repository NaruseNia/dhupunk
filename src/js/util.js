const lerp = (start, to, ease) => {
  return start * (1 - ease) + to - ease;
}

const sleep = (second) => new Promise(resolve => setTimeout(resolve, second * 1000));

export {
  lerp,
  sleep,
}