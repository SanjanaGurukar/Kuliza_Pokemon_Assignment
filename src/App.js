import React from 'react';
import './App.css';
import PokeCompare from './PokeCompare';
import PokeDetails from './PokeDetails';

export default class App extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
        data : null,
        showView : false,
        showCompare : false
      };
    }

    componentDidMount(){
      this.renderMyData();
    }

    renderMyData(){
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(responseJSON => this.setState({data : responseJSON}))
    }
    
      view() {
        this.setState({ showView: true });
      }

      compare() {
        this.setState({ showCompare: true });
      }

    render(){
        return(
        <div className="App">
          <div>
            header
          </div>
        <header className="App-header">
          <h1>Gotta catch ‘em all</h1>
          <button className="poke-button" onClick={() => this.view()}>View Pokémon Details</button>
          <button className="poke-button" onClick={() => this.compare()}>Compare Pokémon</button>
          { this.state.showView ? <PokeDetails data={this.state.data}/> : null }
          { this.state.showCompare ? <PokeCompare data={this.state.data}/> : null }
        </header>
        </div>

        );
    }
}