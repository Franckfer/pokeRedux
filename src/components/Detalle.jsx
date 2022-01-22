import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { pokeDetalle } from '../redux/pokeDucks';


const Detalle = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchData = () => {
            dispatch(pokeDetalle())
        }

        fetchData()
    }, [dispatch]);
    
    const pokemonDetail = useSelector(store => store.pokemones.detail)

    return pokemonDetail ? (
        <div className="card mt-5 text-center">
            <div className="card-body">
                <img src={pokemonDetail.img} className="img-fluid" />
                <div className="card-title text-uppercase">{pokemonDetail.name}</div>
                <p className="card-text">Id: {pokemonDetail.id} | Altura: {pokemonDetail.height} | Ancho: {pokemonDetail.weight}</p>
            </div>

        </div>
    ) : null
};

export default Detalle;
