import React from "react";
import "./Sidebar.css";
import {
    Button
} from "@material-ui/core";
import {
    Add as AddIcon,
    Inbox as InboxIcon,
    Star as StarIcon
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon
                fontSize="large"
                className="sidebar__compose__icon"
            />}
                className="sidebar__compose"
            >Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={45} />
            <SidebarOption Icon={StarIcon()} title="Starred" number={45} />
        </div>
    )
}

export default Sidebar