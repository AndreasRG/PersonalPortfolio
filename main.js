//JAVASCRIPT FOR index.html

/*Light/dark mode switch start:*/
//Selecting different elements in HTML:
const togglePageModeButton = document.querySelector("nav ul li button");
const bodySelector = document.querySelector("body");
const profileImageSelector = document.querySelector("#introduction div img");
const allATagSelector = document.querySelectorAll("body a");
let booleanMode = 0;

// Function to change color of all <a> tags
const changeATagColor = (color) => {
    allATagSelector.forEach(aTag => {
        aTag.style.color = color;
    });
};

//Event listener for click toggle:
togglePageModeButton.addEventListener("click", () => {
    if (booleanMode === 0) {
        booleanMode = 1;
        bodySelector.style.transition = "0.2s";
        bodySelector.style.color = "white";
        bodySelector.style.backgroundColor = "black";
        profileImageSelector.style.borderColor = "white";
        togglePageModeButton.style.backgroundImage = `url("lightModeIcon.png")`;
        changeATagColor("white");
    } else {
        booleanMode = 0;
        bodySelector.style.color = "black";
        bodySelector.style.backgroundColor = "white";
        profileImageSelector.style.borderColor = "grey";
        togglePageModeButton.style.backgroundImage = `url("darkModeIcon.png")`;
        changeATagColor("black");
    }
})

//Event listener for icon change on mouseover/out
togglePageModeButton.addEventListener("mouseover", () => {
    if (booleanMode === 0) {
        togglePageModeButton.style.backgroundImage = `url("darkModeIcon.png")`;
    } else {
        togglePageModeButton.style.backgroundImage = `url("lightModeIcon.png")`;
    }
})
togglePageModeButton.addEventListener("mouseout", () => {
    if (booleanMode === 0) {
        togglePageModeButton.style.backgroundImage = `url("lightModeIcon.png")`;
    } else {
        togglePageModeButton.style.backgroundImage = `url("darkModeIcon.png")`;
    }
})
/*Light/dark mode switch end:*/