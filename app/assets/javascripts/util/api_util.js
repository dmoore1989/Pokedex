window.ApiUtil = {

  fetchAllPokemons: function () {
    $.ajax({
      url: '/api/pokemon',
      datatype: 'json',
      type: 'GET',
      success: function (data) {
        debugger
        ApiActions.receiveAllPokemons(data);
      }
    });
  }
};
