window.PokemonIndexItem = React.createClass ({
  render: function(){
    return (
      <div className="poke-list-item">
          <div>{this.props.pokemon.name}  :  {this.props.pokemon.poke_type}</div>
      </div>
    )
  }
});
