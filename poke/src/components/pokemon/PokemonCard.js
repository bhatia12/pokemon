import React, { Component } from 'react'
import styled from 'styled-components'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
 `;

class PokemonCard extends Component {
    state={
        name:'',
        imageURL:'',
        pokemonIndex:'',
        imageLoading:true,
        toManyRequests: false
    };

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex =url.split('/')[url.split('/').length - 2];
        const imageURL =`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
       
        
        this.setState({
            name,
            imageURL,
            pokemonIndex
        });
    }
    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card">
                    <h5 className="card-header">
                        {this.state.pokemonIndex}
                    </h5>
                    <Sprite className = "card-img-top rounded mx-auto mt-2"
                    onLoad={() => this.setState({ imageLoading: false })}
                    onError={()=>this.setState({ toManyRequests: true })}
                    src={this.state.imageURL}
                    />
                    <div className="card-body mx-auto">
                        <h6 className="card-title ">
                            {this.state.name
                            .toLowerCase()
                            .split(' ')
                            .map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                            .join(' ')}
                        </h6>
                    </div>
                </div> 
            </div>
        )
    }
}

export default PokemonCard
