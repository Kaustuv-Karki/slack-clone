import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Avatar} from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" />
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="Search"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
