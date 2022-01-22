import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientesPokemones, anterioresPokemones, pokeDetalle} from '../redux/pokeDucks';
import Detalle from './Detalle';

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    // console.log(pokemones);

    useEffect(() => {

        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }

        fetchData()

    }, [dispatch]);

    return (
        <div className='row'>
   
            <div className="col-md-6">
                <h3 className='text-center mt-3'>Detalle del Pokemon</h3>
                <Detalle />
            </div> 

            <div className="col-md-6">

                <h3 className='text-center mt-3'>Lista de Pokemon</h3>
                <br />

                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 && (
                            <button onClick= {() => dispatch(obtenerPokemonesAccion()) } className='btn btn-dark'>GET pokemones</button>
                            )
                    }
                </div>

                <ul className='list-group mt-3'>
                    {
                        pokemones.map(pokemon => (
                            <li 
                                key={pokemon.name} 
                                className='list-group-item text-uppercase'
                            > 
                                {pokemon.name} 
                            <button 
                                className="btn btn-dark btn-sm float-right"
                                onClick={() => dispatch(pokeDetalle(pokemon.url))}
                            >Info
                            </button>
                            </li>
                            ))
                        }
                </ul>

                <div className="d-flex justify-content-between">

                    {
                        previous && 
                        <button onClick= {() => dispatch(anterioresPokemones()) } className='btn btn-dark mt-3'>Anteriores</button>
                    }
                    {
                        next && 
                        <button onClick= {() => dispatch(siguientesPokemones()) } className='btn btn-dark mt-3'>Siguientes</button>
                    }
                    
                </div>

            </div> 

        </div>
    )
};

export default Pokemones;
