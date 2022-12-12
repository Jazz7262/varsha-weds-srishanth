import React, { useEffect } from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel() {
    function handleClick() {
        $("#card").fadeOut();
        $(".navbar").css("z-index", "2");
        $(".swing-icon").css("z-index", "2");
        // $("#modal").fadeOut();
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });

        document.getElementById("audio").play();
    }

    useEffect(() => {
        setTimeout(function () {
            $(".subscribeModal-lg").modal("show");
        }, 1000);
    }, []);

    return (
        <section id="card">
            <div className="card-wrapper">
                <div className="top-strip"></div>
                <div className="card-content">
                    <img
                        src="../assets/images/ganesh1.png"
                        alt="Poster"
                        className="modal-poster"
                    />
                    <h1 className="card-title M-0">
                        Sakaray Family's Wedding Invitation
                    </h1>
                    <img
                        src="../assets/images/line-divider.png"
                        alt="line_divider"
                        className="line-divider"
                    />
                    <h4>From:</h4>
                    <h4 className="invitor-name mb-4">
                        Smt. Sakaray Pushpavathi &{" "}
                        <span className="line-break"></span> Sri Sakaray Vijay
                        Kumar
                    </h4>
                    <button className="btn btn-primary" onClick={handleClick}>
                        Open
                    </button>
                </div>
            </div>
        </section>
        // <>
        //     <button
        //         type="button"
        //         class="btn btn-primary"
        //         data-toggle="modal"
        //         data-target="#subscribeModal"
        //     >
        //         Launch demo modal
        //     </button>
        //     <div
        //         class="modal fade text-center py-5 subscribeModal-lg"
        //         id="subscribeModal"
        //         tabindex="-1"
        //         role="dialog"
        //         aria-labelledby="exampleModalLabel"
        //         aria-hidden="true"
        //     >
        //         <div class="modal-dialog modal-lg" role="document">
        //             <div class="modal-content">
        //                 <div class="modal-body">
        //                     <div class="top-strip"></div>
        //                     <a
        //                         class="h2"
        //                         href="https://www.fiverr.com/share/qb8D02"
        //                         target="_blank"
        //                     >
        //                         Sunlimetech
        //                     </a>
        //                     <h3 class="pt-5 mb-0 text-secondary">Newsletter</h3>
        //                     <p class="pb-1 text-muted">
        //                         <small>
        //                             Sign up to update with our latest news and
        //                             products.
        //                         </small>
        //                     </p>
        //                     <form>
        //                         <div class="input-group mb-3 w-75 mx-auto">
        //                             <input
        //                                 type="email"
        //                                 class="form-control"
        //                                 placeholder="sunlimetech@gmail.com"
        //                                 aria-label="Recipient's username"
        //                                 aria-describedby="button-addon2"
        //                                 required
        //                             />
        //                             <div class="input-group-append">
        //                                 <button
        //                                     class="btn btn-primary"
        //                                     type="button"
        //                                     id="button-addon2"
        //                                 >
        //                                     <i class="fa fa-paper-plane"></i>
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </form>
        //                     <p class="pb-1 text-muted">
        //                         <small>
        //                             Your email is safe with us. We won't spam.
        //                         </small>
        //                     </p>
        //                     <div class="bottom-strip"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

export default CustomModel;
