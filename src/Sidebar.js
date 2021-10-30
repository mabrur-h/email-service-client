import React from "react";
import "./Sidebar.css";
import {
    Button, IconButton
} from "@material-ui/core";
import {
    Add as AddIcon,
    Inbox as InboxIcon,
    Star as StarIcon,
    AccessTime as AccessTimeIcon,
    LabelImportant as LabelImportantIcon,
    NearMe as NearMeIcon,
    Note as NoteIcon,
    ExpandMore as ExpandMoreIcon,
    Person as PersonIcon,
    Duo as DuoIcon,
    Phone as PhoneIcon
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

            <SidebarOption Icon={InboxIcon} title="Inbox" number={45} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={22} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={12} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={18} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={33} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={8} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar