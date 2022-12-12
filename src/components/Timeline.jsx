import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Hopefully ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Sumuhurtham | Muhurat</h1>
                    <p>
                        On Sunday, 18<sup>th</sup> December, 2022,
                        <br />
                        Time: 11:43 AM,
                        <br />
                        In Kumbha Lagnam.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        Sri Ambabhavani Temple,
                        <br /> Kilichinpet,
                        <br /> Adoni, Kurnool Dist.,
                        <br /> AP - 518 301.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
