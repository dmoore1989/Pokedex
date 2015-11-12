window.PokemonsIndex = React.createClass({

  getInitialState: function () {
    return {
      pokemons: PokemonStore.all()
    };
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsIndexChangListener(this._onChange);
  },

  _onChange: function () {
    this.setState({pokemons: PokemonStore.all()});
  },



  renderPokemonIndexItems: function () {
    return this.state.pokemons.map(function(pokemon, idx){
      return (
        <PokemonIndexItem pokemon={pokemon} key={idx}/>
      )
    });
  },

  render: function () {
    return (
      <div className="pokemon-index">
        <ul>{this.renderPokemonIndexItems()}</ul>
      </div>
    );
  }

});
