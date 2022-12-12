import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            {/* <div className="text-wrapper">
                <div className="d-flex justify-content-between">
                    <h4 className="pt-5">Srirasthu !</h4>
                    <h4>Subhamasthu !!</h4>
                    <h4 className="pt-5">Kalyanamasthu !!!</h4>
                </div>
            </div> */}
            <div className="poster-wrapper">
                <div className="d-flex justify-content-between">
                    <h4 className="pt-5 text-shadow">Srirasthu !</h4>
                    <h4 className="text-shadow">Subhamasthu !!</h4>
                    <h4 className="pt-5 text-shadow">Kalyanamasthu !!!</h4>
                </div>
                <img
                    src="../assets/images/ganesh2.png"
                    alt="poster"
                    className="poster"
                />
                <h4 className="text-shadow">Sri Ganeshaya Namaha</h4>
                <h4 className="text-shadow">
                    Sri Urunkunda Eranna Swamy Prasanna
                </h4>
            </div>
        </section>
    );
}

export default Header;
