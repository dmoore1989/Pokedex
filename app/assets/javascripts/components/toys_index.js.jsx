window.ToyIndex = React.createClass({
  toys: function () {

    return this.props.toys.map(function (toy) {
      return <li className="toy-list-item"><ToyIndexItem toy={toy}/></li>
    })
  },

  render: function () {
    if (this.props.toys) {
      return (<ul>{this.toys()}</ul>)
    } else {
      return <div></div>
    }

  }

})
