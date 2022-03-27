document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
  alert("Hello JavaScript");
  targetImage.addEventListener("click", function() {
    if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
    } else {
    targetImage.classList.add("small");
}
});
}
