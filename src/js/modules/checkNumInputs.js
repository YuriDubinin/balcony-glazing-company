//Checks the inputs for the fact that the user has entered only numbers there
const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach((item) => {
        item.addEventListener("input", () => {
            item.value = item.value.replace(/\D/, "");
        });
    });
};

export default checkNumInputs;
