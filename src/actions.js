export const STOP = "STOP";
export const GAP = "GAP"
export const TIME = "TIME";

export const gapTime = (gap) => {
  return {
    type: STOP ,
    value: GAP,
    addGap: gap
  }
}

export const countTime = (gap) => {
  return {
    type: STOP,
    value: TIME,
    timeGap: gap
  }
}
