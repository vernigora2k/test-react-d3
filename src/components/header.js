import React, { useContext } from 'react';
import { Context } from '../App';
import './styles/header.css';

const Header = () => {
    const {isEquitiesChecked, handleEquitiesClick, isSynapticsChecked, handleSynapticsClick} = useContext(Context)

    return (
        <div className='header'>
            <div className="header__leftarea">
                <h3>lead/lag synaptics vs</h3>
                <select>
                    <option>Japan Equities</option>
                    <option>Japan Equities</option>
                    <option>Japan Equities</option>
                </select>
            </div>
            <div className="header__rightarea">
                <h3>periods of:</h3>
                <div className="header__equities">
                    <input onClick={handleEquitiesClick} type="checkbox" id="equities" name="scales" />
                    <label htmlFor="equities">Synaptics leads Japan Equities</label>
                </div>
                <div className="header__synaptics">
                    <input onClick={handleSynapticsClick} type="checkbox" id="synaptics" name="scales" />
                    <label htmlFor="synaptics">Japan Equities leads Synaptics</label>
                </div>
            </div>
        </div>
    )
}

export default Header;