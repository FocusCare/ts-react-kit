import * as React from 'react';
import style from './App.pcss';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className={style.app}>
                <div className={style.header}>
                    <img src={logo} className={style.logo} alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className={style.intro}>
                    To get started, edit 2d
                    <code>src/App.tsx</code>
                    and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
