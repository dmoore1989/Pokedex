window.PokemonDetail = React.createClass({
  getInitialState: function () {
    return ({pokemon: this.getStateFromStore()});
  },

  getStateFromStore: function () {
    ApiUtil.fetchPokemon(this.props.params.pokemonId);
    pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    return pokemon;
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsDetailChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsDetailChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (props) {
    ApiUtil.fetchPokemon(props.params.pokemonId);

  },

  mapMoves: function () {
    return this.state.pokemon.moves.map(function (move) {
      return (<li>{move}</li>);
    });
  },

  _onChange: function (pokemon) {
    this.setState({pokemon:pokemon})
  },

  render: function () {
    if (this.state.pokemon) {
      return (
        <div>
          <div className="detail">
            <div><img src={this.state.pokemon.image_url} /></div>
            <div>Name: {this.state.pokemon.name}</div>
            <div>Attack: {this.state.pokemon.attack}</div>
            <div>Defense: {this.state.pokemon.defense}</div>
            <div>Type: {this.state.pokemon.poke_type}</div>
            <ul>Moves: {this.mapMoves()}</ul>
          </div>
          <div><ToyIndex toys={this.state.pokemon.toys} /></div>
        </div>
      );
    } else {
      return (<div> </div>);
    }
  }

});
