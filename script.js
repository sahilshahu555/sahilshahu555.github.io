

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  
  
});

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

GitHubCalendar(".calendar", "sahilshahu555", { responsive: true });

// Resume
var resumeLink1 = document.querySelector("#resume-button-1");
resumeLink1.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1pzwwyEh7eh3iHkt_GQY3XaJpmsLtWtqw/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/u/0/uc?id=1pzwwyEh7eh3iHkt_GQY3XaJpmsLtWtqw&export=download";
  link.click();
});

var resumeLink2 = document.querySelector("#resume-button-2");
resumeLink2.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1pzwwyEh7eh3iHkt_GQY3XaJpmsLtWtqw/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/u/0/uc?id=1pzwwyEh7eh3iHkt_GQY3XaJpmsLtWtqw&export=download";
  link.click();
});
