import React from 'react';
import './styles/header.css';

const Header = () => {

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
                    <input type="checkbox" id="equities" name="scales" />
                    <label for="equities">Synaptics leads Japan Equities</label>
                </div>
                <div className="header__synaptics">
                    <input type="checkbox" id="synaptics" name="scales" />
                    <label for="synaptics">Japan Equities leads Synaptics</label>
                </div>
            </div>
        </div>
    )
}

export default Header;