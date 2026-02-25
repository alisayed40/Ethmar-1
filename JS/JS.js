
const text = `إثمار شركة سعودية مصرية رائدة في تنظيم الفعاليات العقارية والاستثمارية في الوطن العربي منذ 2008.
على مر السنين، قمنا بالعمل مع أكثر من 400 مؤسسة في القطاع العقاري وتنظيم أكثر من 70 فعالية محلية وإقليمية في الدول العربية تحت مظلة رعايات حكومية محلية ودولية وتمثيل دولي رفيع المستوى، وبالشراكة مع القطاع الخاص والعام، والذين حققوا طفرة كبيرة في الأفكار الترويجية والمفاهيم التي تقام بها المعارض والفعاليات العقارية في الوطن العربي.`;

const element = document.getElementById("typing-text");
let i = 0;
let started = false;
const speed = 15;
const delayBeforeStart = 2500; // 👈 هنا الديلاي

function typeWriter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      setTimeout(() => {
        typeWriter();
      }, delayBeforeStart);
    }
  });
}, { threshold: 0.5 });

observer.observe(element);
