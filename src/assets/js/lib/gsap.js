import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function () {
  const windowSize = gsap.matchMedia();

  //タイトル アニメーション
  const target = gsap.utils.toArray(".js-title");

  target.forEach((spanToUp) => {
    const textContent = spanToUp.textContent;
    const wrapSpanTitle = [...textContent].map((char) => `<span>${char}</span>`).join("");
    spanToUp.innerHTML = wrapSpanTitle;

    gsap.set(spanToUp.querySelectorAll("span"), {
      y: 50,
      opacity: 0,
    });

    // const title_tl = gsap.timeline({ repeat: -1 });

    gsap.to(spanToUp.querySelectorAll("span"), {
      y: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: spanToUp,
        start: "top 80%",
        ease: 0.2,
        // markers: true,
        // onEnter: () => {
        //   console.log("aaa");
        // },
      },

      stagger: {
        from: "start",
        each: 0.1,
      },
    });

    gsap.fromTo(
      spanToUp,
      {
        "--w_size": 0,
      },
      {
        "--w_size": "100%",
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: spanToUp,
          start: "top 80%",
          ease: 0.4,
          // markers: true,
        },
      }
    );
  });

  //** concept **//

  gsap.fromTo(
    ".js-concept__items",
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".js-concept__items",
        start: "top 90%",
        // markers: true,
      },
    }
  );

  //** feature__purpose **//
  gsap.fromTo(
    ".js-feature__purpose__title",
    {
      y: 20,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".js-feature__purpose__title",
        start: "top 70%",
        // markers: true,
      },
    }
  );

  //** feature__items **//

  const featureItems = gsap.utils.toArray(".js-feature__items");

  featureItems.forEach((toScale) => {
    windowSize.add("(max-width:1023px)", () => {
      gsap.fromTo(
        toScale,
        {
          autoAlpha: 0,
          scale: 0,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: toScale,
            start: "top 70%",
            ease: 0.5,
            // markers: true,
          },

          stagger: {
            from: "start",
            each: 0.7,
          },
        }
      );
    });

    windowSize.add("(min-width:1024px)", () => {
      gsap.fromTo(
        ".js-feature__items",
        {
          autoAlpha: 0,
          scale: 0,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".js-feature__items",
            start: "top 70%",
            ease: 0.5,
            // markers: true,
          },

          stagger: {
            from: "start",
            each: 0.7,
          },
        }
      );
    });
  });

  //** room__facility **//

  const room__facilityItems = gsap.utils.toArray(".js-room__facility__names");

  room__facilityItems.forEach((fromLeft) => {
    gsap.set(fromLeft, {
      autoAlpha: 0,
      x: -100,
    });

    gsap.to(fromLeft, {
      autoAlpha: 1,
      x: 0,
      duration: 0.7,
      delay: 0.5,

      scrollTrigger: {
        trigger: fromLeft,
        start: "top 70%",
        // markers: true,
      },
    });
  });

  //** plan__item **//
  gsap.fromTo(
    ".js-plan__item",
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".js-plan__item",
        start: "top 70%",
        // markers: true,
      },
    }
  );

  //** plan__option__title **//
  gsap.fromTo(
    ".js-plan__option__title",
    {
      x: -100,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      stagger: 3,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".js-plan__option__title",
        start: "top 60%",
        // markers: true,
      },
    }
  );
}

const roomsTitles = gsap.utils.toArray(".js-common__title__sideLine");

roomsTitles.forEach((slideIn) => {
  gsap.set(slideIn, {
    autoAlpha: 0,
    x: -100,
  });

  gsap.to(slideIn, {
    autoAlpha: 1,
    x: 0,
    duration: 0.6,
    delay: 0.3,

    scrollTrigger: {
      trigger: slideIn,
      start: "top 70%",
      // markers: true,
    },
  });
});

const contents_toUp = gsap.utils.toArray(".js-toUp");

contents_toUp.forEach((toUp) => {
  gsap.fromTo(
    toUp,
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: toUp,
        start: "top 90%",
        // markers: true,
      },
    }
  );
});

const toUp__underLine = gsap.utils.toArray(".js-title__underline");
// console.log(toUp__underLine);

toUp__underLine.forEach((Line) => {
  gsap.fromTo(
    Line,
    {
      "--w_size": 0,
    },
    {
      "--w_size": "100%",
      opacity: 1,
      duration: 1.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: Line,
        start: "top 80%",
        ease: 0.4,
        // markers: true,
      },
    }
  );
});
