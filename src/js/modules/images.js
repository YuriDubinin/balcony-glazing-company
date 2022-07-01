import calcScrollWidth from "./calcScrollWidth";

const images = () => {
    const imgPopup = document.createElement("div"),
        workSection = document.querySelector(".works"),
        bigImage = document.createElement("img"),
        scrollWidth = calcScrollWidth();

    imgPopup.classList.add("popup");
    imgPopup.classList.add("image-popup");
    workSection.appendChild(imgPopup);

    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImage);

    workSection.addEventListener("click", (event) => {
        event.preventDefault();

        const target = event.target;

        if (target && target.classList.contains("preview")) {
            document.body.style.marginRight = `${scrollWidth}px`;
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";

            const path = target.parentNode.getAttribute("href");
            bigImage.setAttribute("src", path);
        }

        if (target && target.matches("div.popup")) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;
