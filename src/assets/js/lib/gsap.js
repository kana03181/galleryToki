import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function () {
  const windowSize = gsap.matchMedia();

  //タイトル アニメーション(小)
  const title_sm = gsap.utils.toArray(".js-title-sm");

  title_sm.forEach((spanToUp_sm) => {
    const textContent = spanToUp_sm.textContent;
    const wrapSpanTitle = [...textContent].map((char) => `<span>${char}</span>`).join("");
    spanToUp_sm.innerHTML = wrapSpanTitle;

    const spans_sm = spanToUp_sm.querySelectorAll("span");

    gsap.set(spans_sm, {
      y: 50,
      opacity: 0,
    });

    gsap.to(spans_sm, {
      y: 0,
      opacity: 1,
      duration: 0.73,
      scrollTrigger: {
        trigger: spanToUp_sm,
        start: "top 80%",
        // ease: 0.3,
        // markers: true,
        // onEnter: () => {
        //   console.log("aaa");
        // },
      },

      stagger: {
        from: "start",
        each: 0.13,
      },
    });

    gsap.fromTo(
      spanToUp_sm,
      {
        "--w_size": 0,
      },
      {
        "--w_size": "100%",
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: spanToUp_sm,
          start: "top 80%",
          // ease: 0.4,
          // markers: true,
        },
      }
    );
  });

  //タイトル アニメーション(中_1)
  const title_md = gsap.utils.toArray(".js-title-md");

  title_md.forEach((spanToUp_md) => {
    const textContent = spanToUp_md.textContent;
    const wrapSpanTitle = [...textContent].map((char) => `<span>${char}</span>`).join("");
    spanToUp_md.innerHTML = wrapSpanTitle;

    const spans_md = spanToUp_md.querySelectorAll("span");

    gsap.set(spans_md, {
      y: 50,
      opacity: 0,
    });

    gsap.to(spans_md, {
      y: 0,
      opacity: 1,
      duration: 0.63,
      scrollTrigger: {
        trigger: spanToUp_md,
        start: "top 80%",
        // ease: 0.3,
        // markers: true,
        // onEnter: () => {
        //   console.log("aaa");
        // },
      },

      stagger: {
        from: "start",
        each: 0.13,
      },
    });

    gsap.fromTo(
      spanToUp_md,
      {
        "--w_size": 0,
      },
      {
        "--w_size": "100%",
        opacity: 1,
        duration: 1.3,
        delay: 0.2,
        scrollTrigger: {
          trigger: spanToUp_md,
          start: "top 80%",
          // ease: 0.4,
          // markers: true,
        },
      }
    );
  });

  //タイトル アニメーション(中_2)
  const title_md2 = gsap.utils.toArray(".js-title-md2");

  title_md2.forEach((spanToUp_md2) => {
    const textContent = spanToUp_md2.textContent;
    const wrapSpanTitle = [...textContent].map((char) => `<span>${char}</span>`).join("");
    spanToUp_md2.innerHTML = wrapSpanTitle;

    const spans_md2 = spanToUp_md2.querySelectorAll("span");

    gsap.set(spans_md2, {
      y: 50,
      opacity: 0,
    });

    gsap.to(spans_md2, {
      y: 0,
      opacity: 1,
      duration: 0.63,
      scrollTrigger: {
        trigger: spanToUp_md2,
        start: "top 80%",
        // ease: 0.3,
        // markers: true,
        // onEnter: () => {
        //   console.log("aaa");
        // },
      },

      stagger: {
        from: "start",
        each: 0.13,
      },
    });

    gsap.fromTo(
      spanToUp_md2,
      {
        "--w_size": 0,
      },
      {
        "--w_size": "100%",
        opacity: 1,
        duration: 1.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: spanToUp_md2,
          start: "top 80%",
          // ease: 0.4,
          // markers: true,
        },
      }
    );
  });

  //タイトル アニメーション(大)
  const title_lg = gsap.utils.toArray(".js-title-lg");

  title_lg.forEach((spanToUp_lg) => {
    const textContent = spanToUp_lg.textContent;
    const wrapSpanTitle = [...textContent].map((char) => `<span>${char}</span>`).join("");
    spanToUp_lg.innerHTML = wrapSpanTitle;

    const spans_lg = spanToUp_lg.querySelectorAll("span");

    gsap.set(spans_lg, {
      y: 50,
      opacity: 0,
    });

    gsap.to(spans_lg, {
      y: 0,
      opacity: 1,
      duration: 0.77,
      scrollTrigger: {
        trigger: spanToUp_lg,
        start: "top 80%",
        // ease: 0.3,
        // markers: true,
        // onEnter: () => {
        //   console.log("aaa");
        // },
      },

      stagger: {
        from: "start",
        each: 0.13,
      },
    });

    gsap.fromTo(
      spanToUp_lg,
      {
        "--w_size": 0,
      },
      {
        "--w_size": "100%",
        opacity: 1,
        duration: 2.35,
        delay: 0.4,
        scrollTrigger: {
          trigger: spanToUp_lg,
          start: "top 80%",
          // ease: 0.4,
          // markers: true,
        },
      }
    );
  });

  //** concept **//
  const concept__items = document.querySelectorAll(".js-concept__items");

  //コンセプト 画像
  gsap.fromTo(
    concept__items[2],
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.9, //3つとも同じスピード
      scrollTrigger: {
        trigger: ".js-concept__items",
        start: "top 90%",
        // markers: true,
      },
    }
  );

  //コンセプト テキスト上
  gsap.fromTo(
    concept__items[0],
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      delay: 0.2,
      y: 0,
      autoAlpha: 1,
      duration: 0.9, //3つとも同じスピード
      scrollTrigger: {
        trigger: ".js-concept__items",
        start: "top 90%",
        // markers: true,
      },
    }
  );

  //コンセプト テキスト下
  gsap.fromTo(
    concept__items[1],
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      delay: 0.2,
      y: 0,
      autoAlpha: 1,
      duration: 0.9, //3つとも同じスピード
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
      autoAlpha: 0.8,
      stagger: 0.3,
      duration: 0.8,
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
            ease: 1.5,
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
            each: 0.69,
          },
        }
      );
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
      autoAlpha: 0.9,
      duration: 0.78,
      stagger: {
        from: "start",
        each: 0.69,
      },

      scrollTrigger: {
        trigger: ".js-plan__item",
        start: "top 70%",
        // markers: true,
      },
    }
  );

  //** 各コンテンツ 下から上へ **//
  const contents_toUp = gsap.utils.toArray(".js-toUp");

  contents_toUp.forEach((toUp) => {
    gsap.fromTo(
      toUp,
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: toUp,
          start: "top 90%",
          // markers: true,
        },
      }
    );
  });
}
