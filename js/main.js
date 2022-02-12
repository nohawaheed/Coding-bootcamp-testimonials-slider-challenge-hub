$(document).ready(function () {
  let isFistSlide;
  let isSecondSlide;
  $(".arrows-container img").click(function (e) {
    let btn = e.target.attributes.src.value;
    let prevBtn = $(".prev-btn").attr("src");
    let nextBtn = $(".next-btn").attr("src");

    isFistSlide = $("figure.first-slide").css("display");
    isSecondSlide = $("figure.second-slide").css("display");
    if (
      (btn == nextBtn && isFistSlide == "flex") ||
      (btn == prevBtn && isFistSlide == "flex")
    ) {
      $("figure.first-slide").css({ display: "none" }, 500);
      $("figure.second-slide").css({ display: "flex" }, 500);
    }

    if (
      (btn == nextBtn && isSecondSlide == "flex") ||
      (btn == prevBtn && isSecondSlide == "flex")
    ) {
      $("figure.second-slide").css({ display: "none" }, 500);
      $("figure.first-slide").css({ display: "flex" }, 500);
    }
  });
  $("body").keydown(function (e) {
    isFistSlide = $("figure.first-slide").css("display");
    isSecondSlide = $("figure.second-slide").css("display");
    if (
      (e.key == "ArrowRight" && isFistSlide == "flex") ||
      (e.key == "ArrowLeft" && isFistSlide == "flex")
    ) {
      $("figure.first-slide").css({ display: "none" }, 500);
      $("figure.second-slide").css({ display: "flex" }, 500);
    }
    if (
      (e.key == "ArrowRight" && isSecondSlide == "flex") ||
      (e.key == "ArrowLeft" && isSecondSlide == "flex")
    ) {
      $("figure.second-slide").css({ display: "none" }, 500);
      $("figure.first-slide").css({ display: "flex" }, 500);
    }
  });
});
