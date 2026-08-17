import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (document.documentElement.classList.contains("js-anim")) {
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .fromTo(".mast", { y: -12 }, { opacity: 1, y: 0, duration: 0.65 }, 0)
    .to(".clip-inner", { y: 0, duration: 1.1, stagger: 0.12, ease: "power4.out" }, 0.1)
    .fromTo(".lede", { y: 16 }, { opacity: 1, y: 0, duration: 0.75 }, 0.45);

  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 84%" },
      }
    );
  });

  gsap.utils.toArray(".work li").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });
}
