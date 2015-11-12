(function(root){
  var _pokemons= [];

  root.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _pokemons.slice();
    },

    resetPokemons: function(pokemons){
      _pokemons = pokemons;
    },

    DispatchId: AppDispatcher.register(function (payload) {
      debugger
      switch(payload.actionType){
        case PokemonConstants.POKEMONS_RECEIVED:
          PokemonStore.resetPokemons(payload.pokemons);
          break;
      }
    })

  });
}(this));
