import React from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from "@material-ui/core";
import {
    ArrowDropDown as ArrowDropDownIcon,
    Redo as RedoIcon,
    MoreVert as MoreVertIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    KeyboardHide as KeyboardHideIcon,
    Settings as SettingsIcon,
    Inbox as InboxIcon,
    People as PeopleIcon,
    LocalOffer as LocalOfferIcon
} from "@material-ui/icons";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject="Hey follow streamer!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Twitch"
                    subject="Hey follow streamer!"
                    description="This is a test from another email list"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList