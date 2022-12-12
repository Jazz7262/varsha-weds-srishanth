import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Smt. Sakaray Pushpavathi and 
                <br />Sri Sakaray Vijay Kumar</h2>
                
                <h5 className="mt-3">
                    H.No. 2/119, Bharpet,
                    <br />
                    Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 99857 44505, <br />
                    +91 85002 42390, <br />
                    +91 73860 09075.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
