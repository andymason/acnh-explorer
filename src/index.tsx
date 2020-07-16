import "preact/debug";
import { h, Component, render } from "preact";

import { getData, IResponse } from "./data";

interface IAppState {
  data: null | IResponse;
}

class App extends Component<{}, IAppState> {
  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Hello World!</h1>
        {data && data.items.map(({ uid, title }) => <p key={uid}>{title}</p>)}
      </div>
    );
  }
}

render(<App />, document.body);
