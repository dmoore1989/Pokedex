(function(root){
  var _pokemons = [];
  var POKEMONS_INDEX_CHANGE_EVENT = "indexChange";

  root.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      console.log(_pokemons)
      return _pokemons.slice();
    },

    resetPokemons: function(pokemons){
      _pokemons = pokemons;
    },

    DispatchId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case PokemonConstants.POKEMONS_RECEIVED:
          PokemonStore.resetPokemons(payload.pokemons);
          PokemonStore.emit(POKEMONS_INDEX_CHANGE_EVENT);
          break;
      }
    }),

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    }



  });
}(this));
