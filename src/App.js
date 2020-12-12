import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/vantu98/fake-api/cv")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({ isLoaded: false, error });
        }
      );
  }

  render() {
    const { isLoaded, data, error } = this.state;

    if (!isLoaded) {
      return <Loader />;
    } else if (error) {
      return <p>Load data errors</p>;
    } else {
      return (
        <div className="grid grid-cols-3 h-screen">
          <div className="w-full h-full bg-gray-100"></div>
          <div className="col-span-2 w-full h-full bg-gray-200"></div>
        </div>
      );
    }
  }
}

function Loader() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute w-full h-screen">
        <div className="relative">
          <div className="w-full h-screen bg-black opacity-25"></div>

          <div className="loader-center p-2">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
