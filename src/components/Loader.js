import React from "react";

export default class Loader extends React.Component {
  render() {
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
}
