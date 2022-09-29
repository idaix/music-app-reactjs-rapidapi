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
    // const prevSong = () => {}
    // next song
    // const nextSong = () => {}
    // repêat & random
    // const toggleRepeat = () => {}
    // const toggleRandom = () => {}
    // end of song
    // const handleEnd = () => {}

    return (
        <PlayerContext.Provider
            value={{
                togglePlaying,
                playing: state.playing,
                songsSet,
                songsList: state.songsList,
                setCurrent,
                currentSong: state.currentSong,
                // prevSong,
                // nextSong,
                // toggleRepeat,
                // toggleRandom,
                // handleEnd,
            }}
        >
            { children }
        </PlayerContext.Provider>
    )
}

export default PlayState;