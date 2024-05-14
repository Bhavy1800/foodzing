import React from "react";
import "./OrderPlaced.css";

class PlaceOrdered extends React.Component {
  state = {
    showAnimation: false,
  };

  componentDidMount() {
    // Trigger animation after component mounts
    setTimeout(() => {
      this.setState({ showAnimation: true });
    }, 100);
  }

  render() {
    const { placeName } = this.props;
    const { showAnimation } = this.state;

    return (
      <div className={`place-ordered ${showAnimation ? "show" : ""}`}>
        <div className="content">
          <h2>Your Place Ordered</h2>
          <p>You ordered from: {placeName}</p>
        </div>
      </div>
    );
  }
}

export default PlaceOrdered;
