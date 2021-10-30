import React from "react";
import './Header.css'
import {
    Menu as MenuIcon, Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
    Apps as AppsIcon,
    Notifications as NotificationsIcon,
} from "@material-ui/icons";
import {
    IconButton,
    Avatar
} from "@material-ui/core";

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt="gmail"
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header