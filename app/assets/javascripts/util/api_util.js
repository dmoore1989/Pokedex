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
  }
};
