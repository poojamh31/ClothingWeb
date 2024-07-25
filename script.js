// const bar = document.getElementsById("bar");
// const close = document.getElementById("close");
// const nav = document.getElementById("navbar");
// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classList.add("active");
//   });
// }
// if (close) {
//   close.addEventListener("click", () => {
//     nav.classList.remove("active");
//   });
// }

// const categoryTitle = document.querySelectorAll(".category-title");
// const allCategoryPosts = document.querySelectorAll(".all");
// for (let i = 0; i < categoryTitle.length; i++) {
//   categoryTitle[i].addEventListener("click"),
//     filterPosts.bind(this, categoryTitle[i]);
// }
// function filterPosts(item) {
//   changeActivePostion(item);
//   for (let i = 0; i < allCategoryPosts.length; i++) {
//     if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
//       allCategoryPosts[i].style.display = "block";
//     } else {
//       allCategoryPosts[i].style.display = "none";
//     }
//   }
// }
// function changeActivePostion(activeItem) {
//   for (let i = 0; i < categoryTitle.length; i++) {
//     categoryTitle[i].classList.remove("active");
//   }
//   activeItem.classList.add("active");
// }

const search = () => {
  const serachbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list-se");
  const product = document.querySelectorAll(".product-se");
  const pname = storeitems.getElementsByTagName("h2");
  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(serachbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
