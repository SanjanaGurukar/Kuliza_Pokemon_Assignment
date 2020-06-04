import React from 'react';
import './PokeDetails.css';
import _ from 'lodash';
import DisplayDetails from './DisplayDetails';

export default class PokeDetails extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
          selected : null,
          PokeList : null
      };
    }

    componentWillMount(){
        this.setState({PokeList : this.props.data.results})
    }

    

    handleChange(e){
        this.setState({selected:e.target.value});
    }

    render(){
        return(
            <div className ="your-pokemon">
                  <select
                    required
                    className="select"
                    onChange={this.handleChange.bind(this)} 
                  >
                    <option value="0">Select your Pokemon</option>
                    
                    {this.state.PokeList.length && 
                      this.state.PokeList.map(function(list, i) {
                        return (
                          <option value={i}>
                            {list.name}
                          </option>
                        );
                      })}
                  </select>
              {this.state.selected ? <DisplayDetails selectedPokemon = {this.state.PokeList[this.state.selected]}/> : null}
            </div>
        )
    }
}