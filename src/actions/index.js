import unsplash from "../apis/unsplash";
import {FETCH_PICS} from './types'


export const fetchPics = (term) => async dispatch => {
    const response = await unsplash.get(`search/photos/?client_id=pdViI5Zzuuxko93JyQUp_pzITcctnm0HGf0W6oi4a90`, {params:{query:term}})
    dispatch({type: FETCH_PICS, payload: response.data})
}
