import MyCard from "./Card";
import pokemons from "../data/pokemons.json"

export default function Inicio (){
    return(
        <div className="cardsPokemon">
    {pokemons.map((pokemon)=>{
       return(  <MyCard name={pokemon.name} img={pokemon.img}/>)
    })}
     </div>
    )
}
