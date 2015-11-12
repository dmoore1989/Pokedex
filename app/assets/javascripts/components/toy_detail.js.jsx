window.ToyDetail = React.createClass({
  getInitialState: function () {
    return null
  },

  getStateFromStore: function (params) {
    var pokemon = PokemonStore.find(parseInt(params.pokemonId));
    ApiUtil.fetchPokemon(pokemon.id)
    if (pokemon && pokemon.toys){
      for (var i = 0; i < pokemon.toys.length; i++) {
        if (pokemon.toys[i].id === this.props.toy_id){
          return pokemon.toys[i];
        }
      }
    }
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsDetailChangeListener(this._onChange);
  },


  componentWillReceiveProps: function (props) {
    this.setState({toy: this.getStateFromStore(props.params)});

  },


  _onChange: function () {
    this.setState({toy: this.getStateFromStore(this.props.params)});
  },

  render: function () {
      return (
        <div className="detail">
          {this.state.toy}
        </div>
    )
  }

});
