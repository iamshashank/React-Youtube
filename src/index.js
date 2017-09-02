//handels jsx
import React,{Component} from 'react';
//responsible for actually rendering them on to DOM
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//youtube api key
const API_KEY = 'AIzaSyAD8UiANq_9O1YQgXNwa6J3B_yPj0pbqpk';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// creatr a new component class
//which is facorty for creating child with differnt attribute
//similar to angular directives
//and this component produce some html
// const App = ()=> {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }


//now we will convert the app to a class based coomponent
//because now it has to manage state which are the list of videos
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('gta');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term},(videos)=>{
      //console.log(videos);
      //this.setState({videos:data});
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},250);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />

      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
      onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
      videos={this.state.videos}/>
      </div>
    );
  }
}





//take this component's generated HTML and put in DOM
//<App /> is JSX syntax for creating  instance of class
//its equivalent to React.createElement()
ReactDOM.render(<App />, document.querySelector('.container'));
//second argment is the target container
//it is a existing dom element
//its where the new element will be attached to
// .constainer is a css class of div
