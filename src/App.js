import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addMessage,
  signIn,
  signOut,
  likesUp,
  dislikesUp
} from './actions';
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
          displayName={this.props.displayName}
          signOut={this.props.signOut}
          handlePageRender={this.handlePageRender} 
          pageRendered={this.state.renderPage}
        />
        {this.state.renderPage === 'Timeline' ? (
          <Timeline 
            messages={this.props.messages} 
            likesUp={this.props.likesUp}
            dislikesUp={this.props.dislikesUp}
          />
        ) : (
          <AddMessage 
            displayName={this.props.displayName}
            signIn={this.props.signIn}
            addMessage={this.props.addMessage}
            handlePageRender={this.handlePageRender} 
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.displayName,
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(addMessage(message)),
    signIn: displayName => dispatch(signIn(displayName)),
    signOut: () => dispatch(signOut()),
    likesUp: payload => dispatch(likesUp(payload)),
    dislikesUp: payload => dispatch(dislikesUp(payload))
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
