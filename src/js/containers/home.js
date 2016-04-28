import preact from 'preact'

let { h, render, Component } = preact;


class Home extends Component {

  render({}, {}) {
    return <div><b>Home</b> container. I only mount on /</div>
  }

}

render(<Home />, document.getElementById('home-react'));