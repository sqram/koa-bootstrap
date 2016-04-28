import preact from 'preact'

let { h, render, Component } = preact;


class Nav extends Component {

  render({}, {}) {
    return <nav>
      <ul>
        <li><a href='/' class='spf-link'>home</a></li>
        <li><a href='/about' class='spf-link'>about</a></li>
      </ul>
    </nav>
  }

}

render(<Nav />, document.getElementById('nav-react'));
