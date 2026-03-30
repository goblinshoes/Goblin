const panes = document.querySelectorAll(".pane");

let z = 1;

let toggleAboutStatus = false;
let toggleWorkStatus = false;
let toggleLinksStatus = false;
let toggleStoreStatus = false;
let toggleContactStatus = false;

let toggleAbout = function () {
  let getAbout = document.querySelector("#aboutPane");
  let getAboutTitle = document.querySelector("#aboutPane .title");
  let getAboutContent = document.querySelector("#aboutPane .content");
  let getAboutCorner = document.querySelector("#aboutPane .corner");

  if (toggleAboutStatus === false) {
    getAbout.style.visibility = "visible";

    toggleAboutStatus = true;
  } else if (toggleAboutStatus === true) {
    getAbout.style.visibility = "hidden";

    toggleAboutStatus = false;
  }
};

let toggleWork = function () {
  let getWork = document.querySelector("#workPane");
  let getWorkTitle = document.querySelector("#workPane .title");
  let getWorkContent = document.querySelector("#workPane .content");
  let getWorkCorner = document.querySelector("#workPane .corner");

  if (toggleWorkStatus === false) {
    getWork.style.visibility = "visible";

    toggleWorkStatus = true;
  } else if (toggleWorkStatus === true) {
    getWork.style.visibility = "hidden";

    toggleWorkStatus = false;
  }
};

let toggleStore = function () {
  let getStore = document.querySelector("#storePane");
  let getStoreTitle = document.querySelector("#storePane .title");
  let getStoreContent = document.querySelector("#storePane .content");
  let getStoreCorner = document.querySelector("#storePane .corner");

  if (toggleStoreStatus === false) {
    getStore.style.visibility = "visible";

    toggleStoreStatus = true;
  } else if (toggleStoreStatus === true) {
    getStore.style.visibility = "hidden";

    toggleStoreStatus = false;
  }
};

let toggleLinks = function () {
  let getLinks = document.querySelector("#linksPane");
  let getLinksTitle = document.querySelector("#linksPane .title");
  let getLinksContent = document.querySelector("#linksPane .content");
  let getLinksCorner = document.querySelector("#linksPane .corner");

  if (toggleLinksStatus === false) {
    getLinks.style.visibility = "visible";

    toggleLinksStatus = true;
  } else if (toggleLinksStatus === true) {
    getLinks.style.visibility = "hidden";

    toggleLinksStatus = false;
  }
};

let toggleContact = function () {
  let getContact = document.querySelector("#contactPane");
  let getContactTitle = document.querySelector("#contactPane .title");
  let getContactContent = document.querySelector("#contactPane .content");
  let getContactCorner = document.querySelector("#contactPane .corner");

  if (toggleContactStatus === false) {
    getContact.style.visibility = "visible";

    toggleContactStatus = true;
  } else if (toggleContactStatus === true) {
    getContact.style.visibility = "hidden";

    toggleContactStatus = false;
  }
};

panes.forEach((pane) => {
  const title = pane.querySelector(".title");
  const corner = pane.querySelector(".corner");

  var l = 0,
    t = 0,
    starX = 0,
    startY = 0;

  pane.addEventListener("mousedown" || "touchstart", () => {
    z = z + 1;
    pane.style.zIndex = z;
  });

  title.addEventListener("mousedown" || "touchstart", (event) => {
    event.preventDefault();
    pane.classList.add("is-dragging");

    let l = pane.offsetLeft;
    let t = pane.offsetTop;

    let startX = event.screenX;
    let startY = event.screenY;

    let xMax = window.innerWidth - 200;
    let yMax = window.innerHeight - 30;

    const drag = (event) => {
      if (
        l + (event.screenX - startX) >= 0 &&
        l + (event.screenX - startX) <= xMax
      ) {
        pane.style.left = l + (event.screenX - startX) + "px";
      }
      if (
        t + (event.screenY - startY) >= 0 &&
        t + (event.screenY - startY) <= yMax
      ) {
        pane.style.top = t + (event.screenY - startY) + "px";
      }
    };

    const mouseup = () => {
      pane.classList.remove("is-dragging");

      document.removeEventListener("mousemove" || "touchmove", drag);
      document.removeEventListener("mouseup" || "touchend", mouseup);
    };

    document.addEventListener("mousemove" || "touchmove", drag);
    document.addEventListener("mouseup" || "touchend", mouseup);
  });

  corner.addEventListener("mousedown" || "touchstart", (event) => {
    event.preventDefault();

    let w = pane.clientWidth;
    let h = pane.clientHeight;

    let startX = event.screenX;
    let startY = event.screenY;

    const drag = (event) => {
      pane.style.width = w + (event.screenX - startX) + "px";
      pane.style.height = h + (event.screenY - startY) + "px";
    };

    const mouseup = () => {
      pane.classList.remove("is-dragging");

      document.removeEventListener("mousemove" || "touchmove", drag);
      document.removeEventListener("mouseup" || "touchend", mouseup);
    };

    document.addEventListener("mousemove" || "touchmove", drag);
    document.addEventListener("mouseup" || "touchend", mouseup);
  });
});
