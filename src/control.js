import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div className="control-section">
        <div className="timer-control">
          <button id="start_count">▶</button>
          <button id="start_stop">Ⅱ</button>
          <button id="reset">■</button>
        </div>
      </div>
    )
  }
}

export default Control;
