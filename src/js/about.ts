import Swiper from "swiper";
import { sharedSwiperOptions } from "./helpers";
import { Navigation, Parallax, Autoplay } from 'swiper/modules';
// CONSTANTS
const maxParagraphLength = 600;

document.addEventListener("DOMContentLoaded", () => {
  //  swiper for success partners
  Swiper.use([Navigation, Parallax, Autoplay]);
  new Swiper("#partnersSwiper", {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      499: {
        slidesPerView: 2,
      },
      999: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  //create span
  function createSpan(content: string) {
    const span = document.createElement("span");
    const contentSpan = document.createTextNode(content);
    span.style.color = "#f59e0b";
    span.style.fontWeight = "900";
    span.style.cursor = "pointer";
    span.appendChild(contentSpan);
    return span;
  }

  // add content

  const paragraphsSplittingHandler = () => {
    const paragraphs = Array.from(
      document.getElementsByClassName("splitParagraph")
    ) as HTMLElement[]

    paragraphs.forEach((paragraph) => {
      const fullContent = paragraph.innerText;

      if (paragraph.innerText.length > maxParagraphLength) {
        paragraph.innerText = fullContent.slice(0, maxParagraphLength);
        const moreSpan = createSpan(" ... المزيد");
        const lessSpan = createSpan(" ... أقل");
        paragraph.appendChild(moreSpan);

        moreSpan.addEventListener("click", () => {
          moreSpan.remove();
          paragraph.innerText += fullContent.slice(maxParagraphLength);
          paragraph.appendChild(lessSpan);
        });

        lessSpan.addEventListener("click", () => {
          lessSpan.remove();
          paragraph.innerText = fullContent.slice(0, maxParagraphLength);
          paragraph.appendChild(moreSpan);
        });
      }
    });
  };

  paragraphsSplittingHandler();
});
