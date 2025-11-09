import { useReducer } from "react";

let state;

export default function useState(init) {
  //값이 바뀔 때 렌더링
  const [, force] = useReducer((x) => x + 1, 0);
  if (state === undefined) {
    state = init;
  }

  const setState = (next) => {
    const prev = state;
    const nextVal = typeof next === "function" ? next(prev) : next;

    if (Object.is(prev, nextVal)) return;
    state = nextVal;
    force();
  };

  return [state, setState];
}