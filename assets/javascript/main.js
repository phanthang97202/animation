const introduce = document.getElementById("introduce");
const service = document.getElementById("service");
const about = document.getElementById("about");
const bookroom = document.getElementById("bookroom");
const weather = document.getElementById("weather");
const youtube = document.getElementById("youtube");
let prevRatio = 0.0;

const activeObserver = (idNode, addClass) => {
  window.addEventListener(
    "load",
    (event) => {
      function buildThresholdList() {
        let thresholds = [];
        console.log("====thresholds", thresholds);
        let numSteps = 20;
        for (let i = 1.0; i <= numSteps; i++) {
          let ratio = i / numSteps;
          console.log("===ratio", ratio);

          thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
      }

      function handleIntersect(entries, observer) {
        // console.log("nhắm thành công");
        // console.log("===entries", entries);
        // console.log("===observer", observer);

        entries.forEach((entry) => {
          // console.log(entry);
          // console.log("entry.intersectionRatio", entry.intersectionRatio);
          if (entry.intersectionRatio > prevRatio) {
            // console.log("===entry.target", entry.target);
            entry.target.classList.add(addClass);
          } else {
            entry.target.classList.remove(addClass);
          }

          prevRatio = entry.intersectionRatio;
        });
      }

      function createObserver() {
        let observer;

        let options = {
          root: null,
          rootMargin: "0px",
          threshold: buildThresholdList(),
        };

        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(idNode);
      }

      createObserver();
    },
    false
  );
};
activeObserver(introduce, "activeIntroduce");
activeObserver(service, "activeServices");
activeObserver(about, "activeAbout");
activeObserver(bookroom, "activeBookroom");
activeObserver(weather, "activeWeather");
activeObserver(youtube, "activeYoutube");
// chức năng đóng mở menu
const btnOpenMenu = document.getElementById("btnOpenMenu");
const menu = document.getElementById("menu");
btnOpenMenu.addEventListener("click", () => {
  menu.classList.toggle("activeMenu");
});
window.addEventListener("resize", (e) => {
  console.log(window.innerWidth);
  if (window.innerWidth > 1060) {
    menu.classList.remove("activeMenu");
  }
});

// window.addEventListener("load", (e) => {
//   console.log(window.innerWidth);
//
//   if (window.innerWidth > 1060) {
//     activeObserver(introduce, "activeIntroduce");
//     activeObserver(service, "activeServices");
//     activeObserver(about, "activeAbout");
//     activeObserver(bookroom, "activeBookroom");
//     activeObserver(weather, "activeWeather");
//     activeObserver(youtube, "activeYoutube");
//   }
// });

// window.addEventListener("scroll", (e) => {
//   if (window.innerWidth > 1060) {
//     activeObserver(introduce, "activeIntroduce");
//     activeObserver(service, "activeServices");
//     activeObserver(about, "activeAbout");
//     activeObserver(bookroom, "activeBookroom");
//     activeObserver(weather, "activeWeather");
//     activeObserver(youtube, "activeYoutube");
//   }
// });
// const animation = (nodeList, condition, classActive) => {
//   window.addEventListener("scroll", () => {
//     const xyz = nodeList.getBoundingClientRect();
//     if (
//       xyz.top / window.innerHeight < 0.7 &&
//       xyz.top / window.innerHeight > 0.5 &&
//       condition === "center"
//     ) {
//       nodeList.classList.add(classActive);
//     }
//     if (
//       xyz.top / window.innerHeight < 0.1 &&
//       xyz.top / window.innerHeight > 0.3 &&
//       condition === "bottom"
//     ) {
//       nodeList.classList.add(classActive);
//     }
//   });
// };
//
// animation(introduce, "center", "activeIntroduce");
// animation(activeServices, "bottom", "activeServices");

// window.addEventListener("scroll", () => {
//   const xyz = introduce.getBoundingClientRect();
//   // console.log(
//   //   "Math.ceil(xyz.top / window.innerHeight)",
//   //   "===xyz.top",
//   //   xyz.top,
//   //   "===window.innerHeight",
//   //   window.innerHeight,
//   //   xyz.top / window.innerHeight
//   // );
//   if (
//     xyz.top / window.innerHeight < 0.7 &&
//     xyz.top / window.innerHeight > 0.5
//   ) {
//     introduce.classList.add("activeIntroduce");
//   }
// });
// const boxes = document.querySelectorAll(".box");
//
// window.addEventListener("scroll", checkBoxes);
//
// checkBoxes();
//
// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   console.log(triggerBottom);
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//
//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.backgroundColor = increasingColor.replace(
//         "ratio",
//         entry.intersectionRatio
//       );
//     } else {
//       entry.target.style.backgroundColor = decreasingColor.replace(
//         "ratio",
//         entry.intersectionRatio
//       );
//     }
//
//     prevRatio = entry.intersectionRatio;
//   });
// }
//
// function createObserver() {
//   let observer;
//
//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList(),
//   };
//
//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(introduce);
// }
//
// // Set things up
// window.addEventListener(
//   "load",
//   (event) => {
//     const introduce = document.getElementById("introduce");
//     console.log("===introduce===", introduce);
//
//     createObserver();
//   },
//   false
// );
