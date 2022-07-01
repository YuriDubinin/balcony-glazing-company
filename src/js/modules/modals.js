import calcScrollWidth from "./calcScrollWidth";

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]"),
            scrollWidth = calcScrollWidth();

        trigger.forEach((item) => {
            item.addEventListener("click", (event) => {
                if (event.target) {
                    event.preventDefault();
                }

                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scrollWidth}px`;
            });
        });

        close.addEventListener("click", () => {
            windows.forEach((item) => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach((item) => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(modalSelector, time) {
        const scrollWidth = calcScrollWidth();
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scrollWidth}px`;
        }, time);
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", "inline-block");
    bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);

    showModalByTime(".popup_engineer", 60000);
};

export default modals;
