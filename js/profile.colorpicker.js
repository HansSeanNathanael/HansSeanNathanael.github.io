let profileBackgroundDiv = document.getElementById("profile-background-color");
let profileColorInput = document.getElementById("profile-color-input");


if (localStorage.getItem("profile_background") !== null) {
    let backgroundColor = localStorage.getItem("profile_background");
    profileBackgroundDiv.style["backgroundColor"] = backgroundColor;
    profileColorInput.value = backgroundColor;
}

profileColorInput.addEventListener('input', (event) => {;
    profileBackgroundDiv.style["backgroundColor"] = event.target.value;
    localStorage.setItem("profile_background", event.target.value);
});