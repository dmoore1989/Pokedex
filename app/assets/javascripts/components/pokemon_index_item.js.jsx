window.PokemonIndexItem = React.createClass ({

  mixins: [ReactRouter.History],



  render: function(){
    return (
      <li>
        <ReactRouter.Link to={'pokemon/' + this.props.pokemon.id}>
          <div className="poke-list-item">
            <div>{this.props.pokemon.name}  :  {this.props.pokemon.poke_type}</div>
          </div>
        </ReactRouter.Link>
      </li>
    )
  }
});
