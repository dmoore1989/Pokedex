window.ToyIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  showToy: function () {
    var toyLink ="/pokemon/" + this.props.toy.pokemon_id;
    toyLink += "/toys/" + this.props.toy.id;
    this.history.pushState(null, toyLink);
  },

  render: function () {
    return (
      <div onClick={this.showToy}>
        <div>Name: {this.props.toy.name}</div>
        <div>Happiness: {this.props.toy.happiness}</div>
        <div>price: {this.props.toy.price}</div>
      </div>
    )
  }
})
