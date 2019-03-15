import React, { Component } from 'react';
import Nav from './components/Nav';
import Timeline from './pages/Timeline';
import AddMessage from './pages/AddMessage';

class App extends Component {
  state = {
    renderPage: 'Timeline'
  };

  handlePageRender = newPage => {
    this.setState({
      renderPage: newPage
    });
  };

  render() {
    return (
      <div>
        <Nav 
          handlePageRender={this.handlePageRender} 
          pageRendered={this.state.renderPage}
        />
        {this.state.renderPage === 'Timeline' ? (
          <Timeline />
        ) : (
          <AddMessage handlePageRender={this.handlePageRender} />
        )}
      </div>
    );
  }
}

export default App;
