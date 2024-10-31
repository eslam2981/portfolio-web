// وظيفة لتفعيل أو إيقاف الوضع الداكن
function toggleDarkMode() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const lifeChangingText = document.getElementById("life-changing-text");
  const greetingText = document.getElementById("greeting-text");

  body.classList.toggle("dark-mode");

  // تبديل الأيقونة بناءً على الوضع الحالي
  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    // تعيين خلفية الـ main إلى سوداء
    document.querySelector(".main").style.backgroundColor = "#000";
    // تعيين لون النص إلى أبيض في الوضع الداكن
    lifeChangingText.style.color = "white";
    greetingText.style.color = "white"; // تعيين لون النص في الوضع الداكن
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    // تعيين خلفية الـ main إلى بيضاء
    document.querySelector(".main").style.backgroundColor = "white";
    // تعيين لون النص إلى أسود في الوضع الفاتح
    lifeChangingText.style.color = "black";
    greetingText.style.color = "black"; // تعيين لون النص في الوضع الفاتح
  }

  // تغيير الأنماط الأخرى حسب الوضع
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  header.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  const navLinks = document.querySelectorAll(".navigation a");
  navLinks.forEach((link) => link.classList.toggle("dark-mode"));

  const cards = document.querySelectorAll(".card, .project-card");
  cards.forEach((card) => card.classList.toggle("dark-mode"));
  const socialIcons = document.querySelectorAll(".social-icons img");
  socialIcons.forEach((icon) => icon.classList.toggle("dark-mode"));
}
const words = [" Eslam Gamil ", "Web Developer"]; // الكلمات التي ستظهر
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // سرعة الكتابة
const deletingSpeed = 100; // سرعة الحذف
const delayBetweenWords = 1000; // التأخير بين الكلمات

function typeEffect() {
  const element = document.getElementById("typewriter");
  const currentWord = words[wordIndex]; // الكلمة الحالية التي يتم كتابتها

  if (isDeleting) {
    // حذف النص تدريجيًا
    element.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // كتابة النص تدريجيًا
    element.innerHTML = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // تبديل بين الكتابة والحذف
  if (!isDeleting && charIndex === currentWord.length) {
    // عندما يصل إلى نهاية الكلمة، ينتظر قليلاً ثم يبدأ بالحذف
    setTimeout(() => {
      isDeleting = true;
    }, delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    // عندما يتم حذف الكلمة بالكامل، ينتقل إلى الكلمة التالية
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // الانتقال إلى الكلمة التالية مع تكرار
  }

  // ضبط السرعة بناءً على حالة الحذف أو الكتابة
  const speed = isDeleting ? deletingSpeed : typingSpeed;

  setTimeout(typeEffect, speed); // استدعاء الدالة مرة أخرى بعد وقت محدد
}

// استدعاء الدالة بمجرد تحميل الصفحة
window.onload = function () {
  typeEffect();
};
