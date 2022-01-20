import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientesPokemones, anterioresPokemones} from '../redux/pokeDucks';

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    // console.log(pokemones);

    return (
        <div>

            <h3>lista de pokemones</h3>
            <br />
            {
                pokemones.length === 0 && (
                    <button onClick= {() => dispatch(obtenerPokemonesAccion()) }>GET pokemones</button>
                )
            }
            <ul>
                {
                    pokemones.map(pokemon => (
                        <li key={pokemon.name}> {pokemon.name} </li>
                        ))
                    }
            </ul>
            {
                previous && 
                <button onClick= {() => dispatch(anterioresPokemones()) }>Anteriores</button>
            }
            {
                next && 
                <button onClick= {() => dispatch(siguientesPokemones()) }>Siguientes</button>
            }
                     

        </div>
    )
};

export default Pokemones;
