const container = document.querySelector(".container");
const coffees = [
  {
    name: "favicon",
    image: "images/icons/logo512x512.png"
  },
  {
    name: "banner",
    image: "images/banner.jpg"
  },
  {
    name: "copybanner",
    image: "images/copybanner.png"
  },
  {
    name: "gp-ds",
    image: "images/gp-ds.png"
  },
  {
    name: "logo",
    image: "images/pic01.png"
  },
  {
    name: "WW",
    image: "images/pic02.jpg"
  },
  {
    name: "CC",
    image: "images/pic03.jpg"
  },
  {
    name: "SG",
    image: "images/pic04.jpg"
  },
];
const showImages = () => {
  let output = "";
  Images.forEach(
    ({ name, image }) =>
      (output += `
             
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}