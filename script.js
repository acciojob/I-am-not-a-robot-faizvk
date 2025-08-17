//your code here
const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const message = document.getElementById("para");

let selected = [];
let allImages = ["img1", "img2", "img3", "img4", "img5"];

function generateImages() {
  container.innerHTML = "";
  selected = [];
  message.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  const duplicateIndex = Math.floor(Math.random() * allImages.length);
  let imagesToShow = [...allImages, allImages[duplicateIndex]];

	 imagesToShow = imagesToShow.sort(() => Math.random() - 0.5);

	 imagesToShow.forEach((cls, idx) => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.dataset.img = cls;
    img.addEventListener("click", () => selectImage(img));
    container.appendChild(img);
  });
}

function selectImage(img) {
  // If already selected, ignore
  if (img.classList.contains("selected")) return;

  // show reset button after first click
  resetBtn.style.display = "inline-block";

  if (selected.length < 2) {
    img.classList.add("selected");
    selected.push(img);

    // After second click, show verify
    if (selected.length === 2) {
      verifyBtn.style.display = "inline-block";
    }
  }
}

resetBtn.addEventListener("click", () => {
  generateImages();
});

verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";
  if (selected[0].dataset.img === selected[1].dataset.img) {
    message.textContent = "You are a human. Congratulations!";
  } else {
    message.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

generateImages();



