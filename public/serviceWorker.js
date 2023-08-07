const installEvent = () => {
  self.addEventListener("install", () => {
    self.skipWaiting();
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener("activate", () => {});
};
activateEvent();

const fetchEvent = () => {
  self.addEventListener("fetch", () => {});
};
fetchEvent();
