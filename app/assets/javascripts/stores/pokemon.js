(function(root){
  var _pokemons = [];
  var POKEMONS_INDEX_CHANGE_EVENT = "indexChange";
  var POKEMON_DETAIL_CHANGE_EVENT = "detailChange";

  root.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    resetPokemons: function (pokemons) {
      _pokemons = pokemons;
    },

    resetSinglePokemon: function (pokemon) {
      var pokeIndex = _pokemons.indexOf(pokemon);
      if (pokeIndex !== -1) {
        _pokemons[pokeIndex] = pokemon;
      } else {
        _pokemons.push(pokemon);
      }
    },

    find: function (id) {
      _pokemons.forEach(function(el){
        if ( el.id === id){
          return el;
        }
      });
    },

    DispatchId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case PokemonConstants.POKEMONS_RECEIVED:
          PokemonStore.resetPokemons(payload.pokemons);
          PokemonStore.emit(POKEMONS_INDEX_CHANGE_EVENT);
          break;
        case PokemonConstants.SINGLE_POKEMON_RECEIVED:
          PokemonStore.resetSinglePokemon(payload.pokemon);
          PokemonStore.emit(POKEMON_DETAIL_CHANGE_EVENT, payload.pokemon);
          break;
      }
    }),

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    addPokemonsDetailChangeListener: function (callback) {
      this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    removePokemonsDetailChangeListener: function (callback) {
      this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
    }



  });
}(this));
