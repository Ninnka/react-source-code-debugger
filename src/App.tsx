import * as React from "react";
import "./styles.css";

class A extends React.PureComponent {
  state = {
    val: 1
  };

  onClickBtn = () => {
    debugger;
    this.setState({ val: 2 });
    debugger;
    this.setState({ val: 3 });
    debugger;
    this.setState({ val: 4 });
    setTimeout(() => {
      debugger;
      this.setState({ val: 5 });
      debugger;
      this.setState({ val: 6 });
    });
  };

  render() {
    const { val } = this.state;
    return (
      <p>
        <button onClick={this.onClickBtn}>click</button>
        {val}
      </p>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <A />
    </div>
  );
}
