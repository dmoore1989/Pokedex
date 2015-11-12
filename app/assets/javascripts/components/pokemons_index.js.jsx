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

  render: function () {
    return (
      <div>{this.state.pokemons}</div>
    );
  }

});
