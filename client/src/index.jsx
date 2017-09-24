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
    $.ajax({
      url: 'http://localhost:1128/repos/import',
      method : 'POST' ,
      dataType : "application/json",
      contentType :"text/plain",
      data : term,
      sucess : function (data) {
                console.log(data);
                  App.setState({
                    repos : data
                  }); 
                },
      error : function (error) {
          console.log(error)
          }
      }).done(function(term){
         console.log(term);
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