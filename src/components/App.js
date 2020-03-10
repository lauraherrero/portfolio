import React, { Fragment } from 'react';
import '../stylesheets/App.scss';
import Menu from './Menu';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState ({
      isClose: !this.state.isClose,
    });
  }


  render() {
    const { isClose } = this.state;

    return (
      <Fragment>
        <Menu 
        isClose={isClose}
        handleToggle={this.handleToggle}
        />
        <Hero />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
