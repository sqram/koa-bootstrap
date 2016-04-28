import preact from 'preact'

let { h, render, Component } = preact;


class about extends Component {

  render({}, {}) {
    return <div id='content'>about container. put components in me.</div>
  }

}

render(<about />, document.getElementById('home-react'));