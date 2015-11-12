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
      return <li><PokemonIndexItem pokemon={pokemon} key={idx} /></li>
    });
  },

  render: function () {
    return (
      <div>
        <ul>{this.renderPokemonIndexItems()}</ul>
      </div>
    );
  }

});
