function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar_light_02.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar_dark.png")
  }
  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Caique Silva sorrindo, usando camisa social branca, barba e com um fundo branco"
    )
  } else {
    alt.setAttribute(
      "alt",
      "Caique Silva sorrindo, usando uma barba, camiseta de cor verde e, de plano de fundo, uma praia com mar esverdeado."
    )
  }
}
