window.onload = function () {
  const yes = document.getElementById("main-img");
  const image1 = () => {
    yes.src = "../assets/image1.jpg";
  };
  document.getElementById("img-1").addEventListener("click", image1);
  document.getElementById("img-1").addEventListener("mouseenter", image1);

  const image2 = () => {
    yes.src = "../assets/image2.jpg";
  };
  document.getElementById("img-2").addEventListener("click", image2);
  document.getElementById("img-2").addEventListener("mouseenter", image2);

  const image3 = () => {
    yes.src = "../assets/image3.jpg";
  };
  document.getElementById("img-3").addEventListener("click", image3);
  document.getElementById("img-3").addEventListener("mouseenter", image3);

  const image4 = () => {
    yes.src = "../assets/image4.jpg";
  };
  document.getElementById("img-4").addEventListener("mouseenter", image4);
  document.getElementById("img-4").addEventListener("click", image4);

  const image5 = () => {
    yes.src = "../assets/image5.jpg";
  };
  document.getElementById("img-5").addEventListener("click", image5);
  document.getElementById("img-5").addEventListener("mouseenter", image5);

  const image6 = () => {
    yes.src = "../assets/image6.jpg";
  };
  document.getElementById("img-6").addEventListener("click", image6);
  document.getElementById("img-6").addEventListener("mouseenter", image6);

  const openDialogBox = document.getElementById("Check-power-id");
  const open = () => {
    document.getElementById("dialog-box-id").style.display = "flex";
    document.getElementById("main-con").style.opacity = "0.3";
  };
  openDialogBox.addEventListener("click", open);

  const closeDialogBox = document.getElementById("ok-btn");

  const close = () => {
    document.getElementById("dialog-box-id").style.display = "none";
    document.getElementById("main-con").style.opacity = "1";
  };
  closeDialogBox.addEventListener("click", close);
};
