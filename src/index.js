import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY ='AIzaSyAjESAaTS6eAqqICy_iH4dzdI_zzLYVhds';



//Create a new Component. This component should produce
//some HTML
//JSX is a subset of JYavascript which allows us to write which looks like html

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null  
    };
    
    this.videoSearch('Javascript');
  }

  
  videoSearch(term){
    YTSearch({key: API_KEY,term:term}, (data) => {
      this.setState({ 
        videos : data,
        selectedVideo: data[0] 
      });  //videos: videos
    });
  }

  
  render() {
    const videoSearchtime = _.debounce((term)=> { this.videoSearch(term) },300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearchtime}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videosMain = {this.state.videos} />
      </div>
    );
  }
}

//Take this Compnent's generated HTML and put it
//on the page(in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));
