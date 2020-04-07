import React, { Component } from 'react';

import { PostsList } from './components/posts-list/posts-list.component';
import { Nav } from './components/nav/nav.component'
import { SearchBox } from './components/serach-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchBox: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(postsList => this.setState({ posts: postsList }));
  }

  handleChange = e => {
    this.setState({ searchBox: e.target.value });
  }

  render() {
    const { posts, searchBox } = this.state;

    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchBox.toLowerCase())
      )

    return(
      <div className="App">
        <Nav />

        <SearchBox
          placeholder="search post title"
          handleChange={this.handleChange}
        />

        <PostsList posts={filteredPosts} />
        
      </div>
    )
  }
}

export default App;
