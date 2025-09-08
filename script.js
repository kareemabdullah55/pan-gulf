const gallery = document.querySelector(".product-gallery");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: -300, behavior: "smooth" });
});
