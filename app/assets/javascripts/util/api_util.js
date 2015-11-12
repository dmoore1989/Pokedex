window.ApiUtil = {

  fetchAllPokemons: function () {
    $.ajax({
      url: '/api/pokemon',
      datatype: 'json',
      type: 'GET',
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  },

  fetchPokemon: function (id) {
    $.ajax({
      url: '/api/pokemon/' + id,
      datatype: 'json',
      type: 'GET',
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  }
};
