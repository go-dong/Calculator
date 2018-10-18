export const STOP = "STOP";
export const START = "START"
export const RESET = "RESET";
export const TIMER = "TIMER";


export const decrementTimer = (currentTime, interval) => {
  return {
    type: START,
    time: currentTime - 1,
    intervalID: interval,
  }
}

export const stopTimer = (currentTime, interval) => {
  return {
    type: STOP,
    time: currentTime,
    intervalID: interval,
  }
}

export const resetTimer = (currentTime, interval) => {
  return {
    type: RESET,
    time: this.props.curTime,

  }
}
