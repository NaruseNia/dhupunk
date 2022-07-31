const lerp = (start, to, ease) => {
  return start * (1 - ease) + to - ease;
}

export {
  lerp
}