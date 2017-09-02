//exporting modules,class,states
//here Component = React.Component
import React,{ Component } from 'react';
//this is functional component
// const SearchBar = ()=>{
//   return <input />;
// };

//now we write a class component
//this type of component has the abilty to hold property etc
class SearchBar extends Component{
  //every class based component has a state object
  //state object stores the value/state of the object
  //whenever state of a react component changes
  //it is re rendered alonmg with its children
  //first we have to define the state object
  constructor(props){
    super(props);
    //we assign the state a custom object
    //term is our property which will store thesearch ternm
    this.state = {term: ''};
  }


  //every class component has a render method
  //this is how we declare a method
  render(){
    return (
      // <input onChange={this.onInputChange}/>
      //new es6 method
      //<input onChange={(event)=>console.log(event.target.value)} />
      //this is how we change state outside constructor funcction
      <div className="search-bar">
      <input
      value={this.state.term}
      onChange={event=> this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // //one way to write event handlers
  // //all native event of js have event argumet
  // //for old es5
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}


export default SearchBar;
