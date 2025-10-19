const products = [
  {
    name: "OCEAN EYES",
    price: "399,000đ",
    mainImg: "img/note_1.jpg",
    hoverImg: "img/note_2.jpg",
  },
  {
    name: "SUNRISE",
    price: "399,000đ",
    mainImg: "img/note_4.jpg",
    hoverImg: "img/note_3.jpg",
  },
  {
    name: "TEA",
    price: "399,000đ",
    mainImg: "img/note_5.jpg",
    hoverImg: "img/note_6.jpg",
  },
  {
    name: "Postcard “Finding myself again”",
    price: "35,000đ",
    mainImg: "img/note_7.png",
    hoverImg: "img/note_8.png",
  },
  {
    name: "Combo Ocean Eyes + Rose",
    price: "726,000₫",
    mainImg: "img/note_9.jpg",
    hoverImg: "img/note_10.png",
  },
];

const productList = document.getElementById("product-list");

products.forEach((p) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `<div class="image-container" data-hover=${p.hoverImg} data-main=${p.mainImg}>
    <img src=${p.mainImg} class="product-img img-fluid"/>
     <h6 class="title">${p.name}</h6>
    <p>${p.price}</p>
  </div>`;
  productList.appendChild(div);
});

document.querySelectorAll(".product-card").forEach((card) => {
  const img = card.querySelector(".product-img");
  const container = card.querySelector(".image-container");
  const mainSrc = container.dataset.main;
  const hoverSrc = container.dataset.hover;

  card.addEventListener("mouseenter", () => {
    img.classList.add("fade");
    setTimeout(() => {
      img.src = hoverSrc;
      img.classList.remove("fade");
    }, 200);
  });

  card.addEventListener("mouseleave", () => {
    img.classList.add("fade");
    setTimeout(() => {
      img.src = mainSrc;
      img.classList.remove("fade");
    }, 200);
  });
});