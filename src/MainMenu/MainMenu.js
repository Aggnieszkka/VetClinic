import React, {Component} from 'react';
import MainMenuButton from './MainMenuButton';
import LoginBox from './LoginBox';
import './style.css';

class MainMenu extends Component {

    render() {
        return (
            <div class="header">
                <div class="emptySpaceHeader"> </div>
                <MainMenuButton text='Terminarz' color=' rgb(78, 78, 241)' icon='CalendarSvg' />
                <MainMenuButton text='Nowa wizyta' color=' rgb(78, 78, 241)' icon='PawSvg' />
                <MainMenuButton text='Archiwum' color=' rgb(78, 78, 241)' icon='BookSvg' />
                <LoginBox text='lek. wet. Anna Kowalska' icon='Avatar' />
            </div>
        )
    }
}

export default MainMenu;