import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //should send req (post) to the server 
    $.ajax({
      url: 'http://localhost:1128/repos/import',
      method : 'POST' ,
      data : JSON.stringify(term), //google me 
      sucess : function (data) {
        App.setState({
          repos : data
        }); 
        //if this didn't re render , we will call render()
      }

    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));