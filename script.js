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

function save() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var add = document.getElementById("add");
  var zip = document.getElementById("zip");

  if (
    name.value == "" &&
    email.value == "" &&
    add.value == "" &&
    zip.value == ""
  ) {
    document.getElementById("H6Uname").innerHTML = "Name is required*";
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("H6Email").innerHTML = "Email is required*";
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("H6Add").innerHTML = "Address is required*";
    document.getElementById("add").style.border = "2px solid red";
    document.getElementById("H6Zip").innerHTML = "Zip code is required*";
    document.getElementById("zip").style.border = "2px solid red";
    return false;
    // alert("full name is required");
  } else if (name.value == "") {
    document.getElementById("H6Uname").innerHTML = "Name is required*";
    document.getElementById("name").style.border = "2px solid red";
    return false;
  } else if (email.value == "") {
    document.getElementById("H6Email").innerHTML = "Email is required*";
    document.getElementById("email").style.border = "2px solid red";
    return false;
  } else if (add.value == "") {
    document.getElementById("H6Add").innerHTML = "Address is required*";
    document.getElementById("add").style.border = "2px solid red";
    return false;
  } else if (zip.value == "") {
    document.getElementById("H6Zip").innerHTML = "Zip code is required*";
    document.getElementById("zip").style.border = "2px solid red";
    return false;
  } else {
    alert("Your details has been saved..!!");
    return true;
  }
}
