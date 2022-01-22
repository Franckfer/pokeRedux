import axios from 'axios'

// constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES = 'OBTENER_POKEMONES';
const SIGUIENTES20_POKEMONES = 'SIGUIENTES20_POKEMONES';
const ANTERIORES20_POKEMONES = 'ANTERIORES20_POKEMONES';
const DETALLE_POKEMONES = 'DETALLE_POKEMONES';


// reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES:
            return {...state, ...action.payload}
        case SIGUIENTES20_POKEMONES:
            return {...state, ...action.payload}
        case ANTERIORES20_POKEMONES:
            return {...state, ...action.payload}
        case DETALLE_POKEMONES:
            return {...state, detail: action.payload}
        default:
            return state;
    }
}


// acciones
export const obtenerPokemonesAccion = () => async (dispatch) => {

    //obtenemos los pokemones que ya fueron guardados en localStorage
    if(localStorage.getItem('offset=0')) {
        dispatch({
            type: OBTENER_POKEMONES,
            payload: JSON.parse(localStorage.getItem('offset=0'))
            //parseamos el objeto que se encontraba en formato string
        })
        return
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=$0&limit=10`)
        dispatch({
            type: OBTENER_POKEMONES,
            payload: res.data
        })

        localStorage.setItem('offset=0', JSON.stringify(res.data))
        //guardamos en localstorage el resultado de data para evitar el uso repetitivo de peticiones a la api
    } catch (error) {
        console.log(error);
        
    }
}

export const pokeDetalle = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch) => {

    if(localStorage.getItem(url)){
        dispatch({
            type: DETALLE_POKEMONES,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    }

    try {
        const res = await axios.get(url)
        dispatch({
            type: DETALLE_POKEMONES,
            payload: {
                id: res.data.id,
                name: res.data.name,
                weight: res.data.weight,
                height: res.data.height,
                img: res.data.sprites.other.dream_world.front_default
            }
        })

        localStorage.setItem(url, JSON.stringify({
            id: res.data.id,
            name: res.data.name,
            weight: res.data.weight,
            height: res.data.height,
            img: res.data.sprites.other.dream_world.front_default
        }))

    } catch (error) {
        console.log(error);
    }
}



//paginacion
export const siguientesPokemones = () => async(dispatch, getState) => {

    const {next} = getState().pokemones
    //en next obtenemos la api siguiente a la anterior con 20 resultdos nuevos

    if(localStorage.getItem(next)) {
        dispatch({
            type: SIGUIENTES20_POKEMONES,
            payload: JSON.parse(localStorage.getItem(next))
            //parseamos el objeto que se encontraba en formato string
        })
        return
    }

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTES20_POKEMONES,
            payload: res.data
        })

        localStorage.setItem(next, JSON.stringify(res.data))

    } catch (error) {
        console.log(error);
    }

}


export const anterioresPokemones = () => async(dispatch, getState) => {

    const {previous} = getState().pokemones
    //en prev obtenemos la api anterior con 20 resultdos nuevos

    if(localStorage.getItem(previous)) {
        dispatch({
            type: ANTERIORES20_POKEMONES,
            payload: JSON.parse(localStorage.getItem(previous))
            //parseamos el objeto que se encontraba en formato string
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: ANTERIORES20_POKEMONES,
            payload: res.data
        })

        localStorage.setItem(previous, JSON.stringify(res.data))

    } catch (error) {
        console.log(error);
    }

}