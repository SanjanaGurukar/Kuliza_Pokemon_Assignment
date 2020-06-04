import React from 'react';
import './DisplayDetails.css'

let Types;
export default class DisplayDetails extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
          pokeData : null
      };
    }
    componentWillMount(){
        this.PokeData();
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.selectedPokemon !== this.props.selectedPokemon){
            this.PokeData();
        }
    }
    PokeData(){
        let URL = this.props.selectedPokemon.url;
        fetch(URL)
            .then(response => response.json())
            .then(responseJSON => this.setState({pokeData : responseJSON}))
    }

    render(){
        if(this.state.pokeData){
            Types = this.state.pokeData.types.map(t => t.type.name)
            Types = Types.join(", ")
        }
        return(
            
            <div className="display">
                {this.state.pokeData ?
                    
                <div>
                    <p><b>Height</b>: {this.state.pokeData.height}</p>
                    <p><b>Base Experience</b>: {this.state.pokeData.base_experience}</p>
                    <p><b>Weight</b>: {this.state.pokeData.weight}</p>
                    <p><b>Types</b>: {Types}</p>
                </div>
                : null}
            </div>
        )
    }
  
}