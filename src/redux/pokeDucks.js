import axios from 'axios'

// constantes
const dataInicial = {
    array : [],
    offset: 0
}

const OBTENER_POKEMONES = 'OBTENER_POKEMONES'
const SIGUIENTES20_POKEMONES = 'SIGUIENTES20_POKEMONES'


// reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES:
            return {...state, array: action.payload}
        case SIGUIENTES20_POKEMONES:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state;
    }
}


// acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    const {offset} = getState().pokemones

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error);
        
    }
}

//paginacion
export const siguientesPokemones = () => async(dispatch, getState) => {

    const offset = getState().pokemones.offset

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset + 20}&limit=20`)
        dispatch({
            type: SIGUIENTES20_POKEMONES,
            payload: {
                array:  res.data.results,
                offset: offset + 20
            }
        })
    } catch (error) {
        console.log(error);
    }

}