import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Lisbon" };
    this.fetchWeather=this.fetchWeather.bind(this);
  }

fetchWeather(){
  console.log('Loading')
  console.log(this)
}

  render() {
    return (
      <div className="app">
        <input
          type="text"
          placeholder="Search Location..."
          value={this.state.location}
          onChange={(e) => this.setState({location : e.target.value})}
        />
        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    );
  }
}
export default App;
