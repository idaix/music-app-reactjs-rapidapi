import { useReducer } from "react";
import playerReducer from "./playerReducer";
import PlayerContext from "./playerContext";
import { SET_CURRENT_SONG, SET_SONG_ARRAY, TOGGLE_PLAYING, TOGGLE_RANDOM, TOGGLE_REPEAT } from "./types";

const PlayState = ({ children }) => {
    // initial state's value
    const initialState = {
        currentSong: {},
        songsList:[],
        repeat: false,
        random: false,
        playing: false,
    }
    const [ state, dispatch ] = useReducer(playerReducer, initialState)

    // --- methods logic ---
    // set songs array
    const songsSet = (songsList) => dispatch({ type: SET_SONG_ARRAY, data: state.songsList = songsList, })
    // set playing state - play and pause
    const togglePlaying = () => dispatch({ type: TOGGLE_PLAYING, data: state.playing? false: true, })
    // set current song
    const setCurrent = (newSong) => dispatch({ type: SET_CURRENT_SONG, data: state.currentSong = newSong, })
    // prev song
    const prevSong = () => {
        if (state.random){
            return setCurrent(~~(Math.random() * state.songsList?.length))
        }
        if (state.currentSong.key == 0){
            return setCurrent(state.songsList.length - 1)
        }else{
            return setCurrent(state.currentSong.key - 1)
        }
    }
    // next song
    const nextSong = () => {
        if (state.random){
            return setCurrent(~~(Math.random() * state.songsList?.length))
        }
        if (state.currentSong.key == state.songsList.length - 1){
            return setCurrent(0)
        }else{
            return setCurrent(state.currentSong.key + 1)
        }
    }
    // repêat & random
    const toggleRepeat = (id) => {
        dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true, })
    }
    const toggleRandom = (id) => {
        dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true,  })
    }
    // end of song
    const handleEnd = () => {
        if (state.random){
            return dispatch({ type: SET_CURRENT_SONGT, data: ~~Math.random()* state.songsList.length, })
        }else{
            if (state.repeat) {
                nextSong()
            }else if (state.currentSong == state.songsList.length - 1){
                return 
            }else{
                nextSong()
            }
        }
    }

    return (
        <PlayerContext.Provider
            value={{
                togglePlaying,
                playing: state.playing,
                songsSet,
                songsList: state.songsList,
                setCurrent,
                currentSong: state.currentSong,
                prevSong,
                nextSong,
                toggleRepeat,
                toggleRandom,
                handleEnd,
            }}
        >
            { children }
        </PlayerContext.Provider>
    )
}

export default PlayState;