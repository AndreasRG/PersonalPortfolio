//BASAL JAVASCRIPT FOR PERSONAL PORTFOLIO

/*Light/dark mode switch start:*/
//Selecting different elements in HTML:
const togglePageModeButton = document.querySelector(".lightDarkModeBtn");
const bodySelector = document.querySelector("body");
const profileImageSelector = document.querySelector("#introduction div img");
const allATagSelector = document.querySelectorAll("body a");
const allNavButtonSelector = document.querySelectorAll(".navBtn")
let booleanMode = 0;

// Function to change color of all <a> tags:
const changeATagColor = (color) => {
    allATagSelector.forEach(aTag => {
        aTag.style.color = color;
    });
};

// Function to change color of all nav buttons:
const changeNavButtonColor = (color) => {
    allNavButtonSelector.forEach(navButton => {
        navButton.style.color = color;
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
        changeNavButtonColor("white");
        changeATagColor("white");
    } else {
        booleanMode = 0;
        bodySelector.style.color = "black";
        bodySelector.style.backgroundColor = "white";
        profileImageSelector.style.borderColor = "grey";
        togglePageModeButton.style.backgroundImage = `url("darkModeIcon.png")`;
        changeNavButtonColor("black");
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

document.addEventListener("DOMContentLoaded", () => {
    const togglePageModeButton = document.querySelector(".lightDarkModeBtn");
    const bodySelector = document.querySelector("body");
    const profileImageSelector = document.querySelector("#introduction div img");
    const allATagSelector = document.querySelectorAll("body a");
    const allNavButtonSelector = document.querySelectorAll(".navBtn");
    let booleanMode = 0;

    const changeATagColor = (color) => {
        allATagSelector.forEach(aTag => {
            aTag.style.color = color;
        });
    };

    const changeNavButtonColor = (color) => {
        allNavButtonSelector.forEach(navButton => {
            navButton.style.color = color;
        });
    };

    if (togglePageModeButton) {
        togglePageModeButton.addEventListener("click", () => {
            if (booleanMode === 0) {
                booleanMode = 1;
                if (bodySelector) {
                    bodySelector.style.transition = "0.2s";
                    bodySelector.style.color = "white";
                    bodySelector.style.backgroundColor = "black";
                }
                if (profileImageSelector) profileImageSelector.style.borderColor = "white";
                togglePageModeButton.style.backgroundImage = `url("lightModeIcon.png")`;
                changeNavButtonColor("white");
                changeATagColor("white");
            } else {
                booleanMode = 0;
                if (bodySelector) {
                    bodySelector.style.color = "black";
                    bodySelector.style.backgroundColor = "white";
                }
                if (profileImageSelector) profileImageSelector.style.borderColor = "grey";
                togglePageModeButton.style.backgroundImage = `url("darkModeIcon.png")`;
                changeNavButtonColor("black");
                changeATagColor("black");
            }
        });
    }
});
/*Light/dark mode switch end:*/







/*Data test start:

//Fetching data:
document.addEventListener('DOMContentLoaded', async () => {
    const objectId = '673a8153aa0ea8786902188f'; // Replace with the actual ObjectId you want to query
    const response = await fetch(`http://localhost:3000/maindb/data/${objectId}`);

    if (response.ok) {
        const data = await response.json();

        // Select the HTML elements
        const nameSelector = document.querySelector(".name");
        const ageSelector = document.querySelector(".age");
        const genderSelector = document.querySelector(".gender");

        // Ensure elements are found before setting their textContent
        if (nameSelector && ageSelector && genderSelector) {
            nameSelector.textContent = data.name || 'Name not found'; // Assuming your data object has a 'name' property
            ageSelector.textContent = data.age || 'Age not found';   // Assuming your data object has an 'age' property
            genderSelector.textContent = data.gender || 'Gender not found'; // Assuming your data object has a 'gender' property
        } else {
            console.error('One or more elements were not found in the DOM.');
        }
    } else {
        console.error('Failed to fetch data:', response.status);
    }
});

/*Data test end*/

