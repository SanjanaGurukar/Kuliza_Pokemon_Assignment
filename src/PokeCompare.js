import React from 'react';
import PokeDetails from './PokeDetails';

export default class PokeCompare extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
      };
    }
    
    render(){
        return(
            <div>
                <PokeDetails data={this.props.data}/>
            </div>
        )
    }
}