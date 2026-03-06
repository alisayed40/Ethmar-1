
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ===============================
// Typing Text
// ===============================

const text = `إثمار شركة سعودية مصرية رائدة في تنظيم الفعاليات العقارية والاستثمارية في الوطن العربي منذ 2008.
على مر السنين، قمنا بالعمل مع أكثر من 400 مؤسسة في القطاع العقاري وتنظيم أكثر من 70 فعالية محلية وإقليمية في الدول العربية تحت مظلة رعايات حكومية محلية ودولية وتمثيل دولي رفيع المستوى، وبالشراكة مع القطاع الخاص والعام، والذين حققوا طفرة كبيرة في الأفكار الترويجية والمفاهيم التي تقام بها المعارض والفعاليات العقارية في الوطن العربي.`;

const element = document.getElementById("typing-text");

let i = 0;
let started = false;
const speed = 10;
const delayBeforeStart = 7500;

function typeWriter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// ===============================
// Scroll Trigger 
// ===============================

const triggerOffset = 225; 

function handleScroll() {

  document.querySelectorAll(".animate-section").forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= triggerOffset && !section.classList.contains("show")) {

      section.classList.add("show");

      if (!started && section.id === "about") {
        started = true;
        setTimeout(typeWriter, delayBeforeStart);
      }
    }

  });

}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

const video = document.getElementById("intro-video");
const overlay = document.getElementById("intro-overlay");
document.documentElement.classList.add("no-scroll");
document.body.classList.add("no-scroll");

video.onended = () => {

  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.6s";

  setTimeout(() => {
    overlay.remove();


    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");

  }, 600);

};