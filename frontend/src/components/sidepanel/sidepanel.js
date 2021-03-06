import React from "react";

const Sidepanel = (props) => (
    <div id="sidepanel">
        <div id="profile">
        <div className="wrap">
            <img id="profile-img" src="http://sun9-81.userapi.com/sun9-73/s/v1/if1/POkG8QLF2aviCOpRrXdnhy-NMirwkhVw2ng3k5YYuyRL8tggXoTEGRR98p8OJIXKXfiSbmCp.jpg?size=200x200&quality=96&crop=0,13,200,200&ava=1" className="online" alt="" />
            <p>username</p>
            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
            <ul>
                <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
            </ul>
            </div>
            <div id="expanded">
            {/* <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
            <input name="twitter" type="text" placeholder="mikeross" />
            <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
            <input name="twitter" type="text" placeholder="ross81" />
            <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
            <input name="twitter" type="text" placeholder="mike.ross" /> */}
            </div>
        </div>
        </div>
        <div id="search">
        <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
        <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
        <ul>
            <li className="contact">
            <div className="wrap">
                <span className="contact-status online"></span>
                <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                <div className="meta">
                <p className="name">Louis Litt</p>
                <p className="preview">You just got LITT up, Mike.</p>
                </div>
            </div>
            </li>
            <li className="contact active">
            <div className="wrap">
                <span className="contact-status busy"></span>
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <div className="meta">
                <p className="name">Harvey Specter</p>
                <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and htmlForty six other things.</p>
                </div>
            </div>
            </li>
        </ul>
        </div>
        <div id="bottom-bar">
        <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
        <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
        </div>
    </div>
)

export default Sidepanel;