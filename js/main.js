document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-groups");
  faqContainer.addEventListener("click", (e) => {
    const faqHeader = e.target.closest(".faq-header");
    if (!faqHeader) return;

    const group = faqHeader.parentElement;
    const groupBody = group.querySelector(".faq-body");
    const icon = faqHeader.querySelector("i");

    icon.classList.toggle("fa-minus");
    icon.classList.toggle("fa-plus");

    groupBody.classList.toggle("open");

    const faqGroups = faqContainer.querySelectorAll(".faq-group");
    faqGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        otherGroup.querySelector(".faq-body").classList.remove("open");
        otherGroup.querySelector(".faq-header i").classList.remove("fa-minus");
        otherGroup.querySelector(".faq-header i").classList.add("fa-plus");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamBtn = document.querySelector(".ham-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-active");
    hamBtn.classList.toggle("ham-active");
  });
});
