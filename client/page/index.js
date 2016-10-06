import React, { Component } from 'react';
import { Link } from 'react-router';

class Page extends Component {
  render() {
    return (
      <div>
        <header><h1>Hello world</h1></header>
        <section>{this.props.children}</section>
        <footer>
          <ul>
          	<li><Link to="/">Foo</Link></li>
          	<li><Link to="/bar">Bar</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
}

class Foo extends Component {
  render() {
    return (<h2>Foo</h2>);
  }
}

class Bar extends Component {
  render() {
    return (<h2>Bar</h2>);
  }
}

export { Foo, Bar };
export default Page;
