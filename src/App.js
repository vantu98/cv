import React from "react";
import "./styles.css";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TextBlock from "./components/TextBlock";

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
    fetch("https://my-json-server.typicode.com/vantu98/fake-api/cv_en")
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
        <div>
          <Header data={data.about_me} />
          <section className="pt-20">
            <div className="container mx-auto">
              <Intro data={data.about_me} />

              <div className="grid grid-rows-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 gap-4 my-8">
                <div className="w-full px-2">
                  <div className="w-full">
                    <TextBlock
                      title="personal summary"
                      content={data.about_me.description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default App;
