import React from 'react';
import './App.css';
import {Header} from "./views/Header/Header";
import {MainBlock} from "./views/MainBlock/MainBlock";
import {useTypedSelector} from "./utils/hooks/useTypedSelector";
import {ErrorWindow} from "./components/errWindow/ErrorWindow";
import {LoaderLinear} from "./components/loader/LoaderLinear";

function App() {

    const errorStatus = useTypedSelector(state => state.app.errorStatus)
    const errorText = useTypedSelector(state => state.app.errorText)
    const cinemaData = useTypedSelector(state => state.cinema.cinemaData)
    const loaderStatus = useTypedSelector(state => state.app.loaderStatus)

    return (
        <div className="App">
            <Header/>
            {loaderStatus && <LoaderLinear/>}
            {cinemaData.length !== 0 && <MainBlock/>}
            {errorStatus && <ErrorWindow errorText={errorText}/>}
        </div>
    );
}

export default App;
