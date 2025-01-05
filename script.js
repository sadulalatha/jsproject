let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

// Handle form submission when the enter key is pressed
document
  .querySelector(".search-bar-container")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    searchPackages();
  });

// Handle search icon click event
document.getElementById("search-btn").addEventListener("click", (event) => {
  event.preventDefault();
  searchPackages();
});

function searchPackages() {
  const searchValue = document
    .querySelector("#search-bar")
    .value.trim()
    .toLowerCase();

  if (searchValue) {
    const packages = document.querySelectorAll(".box");
    let found = false;

    document.querySelectorAll(".box").forEach((box) => {
      box.classList.remove("highlight");
    });

    packages.forEach((packageBox) => {
      const packageTitle = packageBox
        .querySelector("h3")
        .textContent.toLowerCase();

      if (packageTitle.includes(searchValue)) {
        found = true;
        packageBox.scrollIntoView({ behavior: "smooth" });
        packageBox.classList.add("highlight");
      }
    });

    if (!found) {
      alert("No matching packages found");
    }

    document.querySelector("#search-bar").value = "";
  }
}

document.querySelectorAll(".packages .btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#book").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".book .btn").addEventListener("click", (event) => {
  event.preventDefault();
  const Name = document.querySelector(".name").value;
  const placeName = document.querySelector(".place").value;
  const guests = document.querySelector(".number").value;
  const arrivalDate = document.querySelector(".date").value;
  const leavingDate = document.querySelector(".date2").value;

  if (!placeName || !guests || !arrivalDate || !leavingDate) {
    alert("Please fill in all the fields before proceeding.");
    return;
  }

  // Save data to local storage
  localStorage.setItem("Name", Name);
  localStorage.setItem("placeName", placeName);
  localStorage.setItem("guests", guests);
  localStorage.setItem("arrivalDate", arrivalDate);
  localStorage.setItem("leavingDate", leavingDate);

  // Navigate to the next page
  window.location.href = "book.html";
});

document.querySelector(".contact .btn").addEventListener("click", (event) => {
  event.preventDefault();
  const Name = document.querySelector(".c_name").value;
  const email = document.querySelector(".c_email").value;
  const number = document.querySelector(".c_number").value;
  const subject = document.querySelector(".c_subject").value;
  if (!Name || !email || !number || !subject) {
    alert("Please fill in all the fields before proceeding!");
    return;
  } else {
    alert("Submitted successfully!");
  }
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
