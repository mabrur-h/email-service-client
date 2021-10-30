import React from 'react';
import './Mail.css';
import {IconButton} from "@material-ui/core";
import {
    ArrowBack as ArrowBackIcon,
    MoveToInbox as MoveToInboxIcon,
    Error as ErrorIcon,
    Delete as DeleteIcon,
    Email as EmailIcon,
    WatchLater as WatchLaterIcon,
    CheckCircle as CheckCircleIcon,
    LabelImportant as LabelImportantIcon,
    MoreVert as MoreVertIcon,
    UnfoldMore as UnfoldMoreIcon,
    Print as PrintIcon,
    ExitToApp as ExitToAppIcon
} from "@material-ui/icons"
import {useHistory} from "react-router-dom";

function Mail() {
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <h1>Whats up boy?</h1>
        </div>
    )
}

export default Mail