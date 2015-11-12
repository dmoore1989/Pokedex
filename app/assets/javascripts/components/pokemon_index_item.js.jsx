window.PokemonIndexItem = React.createClass ({

  mixins: [ReactRouter.History],

  showDetail: function () {
    this.history.pushState(null, "pokemon/" + this.props.pokemon.id);
  },

  render: function(){
    return (
      <li onClick={this.showDetail}>
        <div className="poke-list-item">
          <div>{this.props.pokemon.name}  :  {this.props.pokemon.poke_type}</div>
        </div>
      </li>
    )
  }
});
