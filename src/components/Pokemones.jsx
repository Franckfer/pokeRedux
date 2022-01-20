import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientesPokemones} from '../redux/pokeDucks';

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones);

    return (
        <div>
            
            <h3>lista de pokemones</h3>
            <button onClick= {() => dispatch(obtenerPokemonesAccion()) }>GET pokemones</button>

            <ul>
                {
                    pokemones.map(pokemon => (
                        <li key={pokemon.name}> {pokemon.name} </li>
                        ))
                    }
            </ul>
                    
            <button onClick= {() => dispatch(siguientesPokemones()) }>Siguientes Pokemones</button>

        </div>
    )
};

export default Pokemones;
