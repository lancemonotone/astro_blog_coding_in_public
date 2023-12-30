const navLinks = document.querySelectorAll("[data-navLink]")

function isCurrentPage(link: Element): boolean {
  return link.getAttribute("href") === window.location.pathname
}

navLinks.forEach((link) => {
  if (isCurrentPage(link)) {
    link.setAttribute("aria-current", "page")
  }
})
