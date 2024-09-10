let body = document.getElementById("body")
let lightModeButton = document.getElementById("light-mode-button");
let darkModeButton = document.getElementById("dark-mode-button");
let lightModeButtonMd = document.getElementById("light-mode-button-md");
let darkModeButtonMd = document.getElementById("dark-mode-button-md");

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light")
}

if (localStorage.getItem("theme") === "dark") {
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    body.classList.add("dark");
}
else {    
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    body.classList.remove("dark")
}


lightModeButton.onclick = () => {
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    localStorage.setItem("theme", "light")
    body.classList.remove("dark")
}

darkModeButton.onclick = () => {
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    localStorage.setItem("theme", "dark")
    body.classList.add("dark")
}


lightModeButtonMd.onclick = () => {
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    localStorage.setItem("theme", "light")
    body.classList.remove("dark")
}

darkModeButtonMd.onclick = () => {
    darkModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButton.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"
    darkModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 focus:outline-none"
    lightModeButtonMd.className = "w-full flex text-left items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 dark:text-violet-50 focus:outline-none"

    localStorage.setItem("theme", "dark")
    body.classList.add("dark")
}