import React, { Component } from 'react';
import axios from 'axios'

export default class Pokemon extends Component {
    state = {
        name:'',
        pokemonIndex:'',
        ImageURL:'',
        types:[],
        description:'',
        stats:{
            hp:"",
            attack:"",
            defense:"",
            speed:"",
            specialAttack:"",
            specialDefense:""
        },
        height:"",
        weight:"",
        eggGroup:"",
        abilities:"",
        genderRatioMale:"",
        genderRatioFemale:"",
        evs:"",
        hatchSteps:""
    };

    async componentDidMount(){
        const { pokemonIndex}=this.props.match.params;

        //Urls for pokemon Information
        const pokemonURL=`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesURL=`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

        //Get Pokemon Information
        const pokemonRes=await axios.get(pokemonURL);

        const name=pokemonRes.data.name;
        const ImageURL=pokemonRes.data.sprites.font_default;
        
        let {hp,attack,defense,speed,specialAttack,specialDefense}='';

        pokemonRes.data.stats.map(stat=>{
            switch(stat.stat.name){
                case hp:
                    hp = stat['base_stat']
                    break;
                case attack:
                    attack= stat['base_stat']
                    break;
                case defense:
                    defense = stat['base_stat']
                    break;
                case speed:
                    speed = stat['base_stat']
                    break;
                case specialAttack:
                    specialAttack = stat['base_stat']
                break;
                case specialDefense:
                    specialDefense = stat['base_stat']
                break;
                
            }
        });
        //convert decimal to feet
    const height = Math.round((pokemonRes.data.height * 0.328084 + 0.0001) * 100) / 100;
 
    const weight = Math.round((pokemonRes.data.weight * 0.0220462 + 0.0001) * 100) / 100;

    const types = pokemonRes.data.types.map(type => type.type.name);

    const abilities = pokemonRes.data.abilities.map(ability => {
        return ability.ability.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    })

    const evs = pokemonRes.data.stats.filter(stat =>{
        if(stat.effort > 0){
            return true;
        }
        return false;
    });

    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>   
            </div>
        )
    }
}
