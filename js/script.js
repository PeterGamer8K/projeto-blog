function main() {
  const toggleButton = document.querySelector("#toggle-button")
  toggleButton.addEventListener("change", (event) => {
    const buttonIsChecked = event.target.checked
    toggleTheme(buttonIsChecked ? "dark" : "light")
  })
}

function toggleTheme(theme) {
  const htmlElement = document.querySelector("html")

  if (theme == "dark") {
    htmlElement.classList.add("dark")
    htmlElement.classList.remove("light")
  } else {
    htmlElement.classList.add("light")
    htmlElement.classList.remove("dark")
  }
}

window.addEventListener("DOMContentLoaded", () => {
  main()
})
