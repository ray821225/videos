import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyB6wr_xUac3RRfQjrwgGMeAxT8Z9le9mGk";

class App extends React.Component {
  state = { video: [], selcetedVideo: null };

  componentDidMount() {
    this.onTermSubmit("apple");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    // console.log(response);
    this.setState({
      video: response.data.items,
      selcetedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selcetedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selcetedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
