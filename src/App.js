import React, { Component } from 'react';
import Nav from './components/Nav';
import Timeline from './pages/Timeline';
import AddMessage from './pages/AddMessage';

class App extends Component {
  state = {
    renderPage: 'Timeline',
    displayName: null
  };

  doAddDisplayName = name => {
    this.setState({ displayName: name });
  }

  doSignOut = () => {
    this.setState({ displayName: null });
  }

  handlePageRender = newPage => {
    this.setState({
      renderPage: newPage
    });
  };

  render() {
    return (
      <div>
        <Nav
          displayName={this.state.displayName}
          doSignOut={this.doSignOut} 
          handlePageRender={this.handlePageRender} 
          pageRendered={this.state.renderPage}
        />
        {this.state.renderPage === 'Timeline' ? (
          <Timeline />
        ) : (
          <AddMessage 
            displayName={this.state.displayName}
            handlePageRender={this.handlePageRender} 
            doAddDisplayName={this.doAddDisplayName}  
          />
        )}
      </div>
    );
  }
}

export default App;
