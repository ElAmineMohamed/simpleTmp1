"use strict";
// const slider = document.querySelector('.sladerWraper')!
// const prev = document.querySelector('.prev')!
// const next = document.querySelector('.next')!
// next.addEventListener('click', () => {
//     console.log('it`s working')
//     slider.scrollBy({ left: 200, behavior: 'smooth' }) // Scrolls 200px to the right
// })
// prev.addEventListener('click', () => {
//     console.log('it`s working')
//     slider.scrollBy({ left: -200, behavior: 'smooth' }) // Scrolls 200px to the left
// })
// let scrollAmount = 0;
// function autoScroll() {
//     scrollAmount += 1;
//     slider.scrollLeft = scrollAmount;
//     if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//         scrollAmount = 0; // Reset when reaching the end
//     }
//     requestAnimationFrame(autoScroll); // Continuously call this function
// }
// autoScroll(); // Start the auto scroll
const slider = document.querySelector('.sladerWraper');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let isAutoScrolling = true;
let scrollTimeout;
// التمرير التلقائي
function autoScroll() {
    if (isAutoScrolling) {
        slider.scrollBy({ left: 1, behavior: 'smooth' }); // تمرير بكسل واحد
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0; // إعادة التمرير إلى البداية عند الوصول للنهاية
        }
    }
    requestAnimationFrame(autoScroll); // استدعاء مستمر لتحديث التمرير
}
// إيقاف التمرير التلقائي عند استخدام الأزرار وإعادة تشغيله بعد 5 ثوانٍ
function resetAutoScroll() {
    isAutoScrolling = false;
    if (scrollTimeout)
        clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isAutoScrolling = true;
    }, 1500); // استئناف التمرير التلقائي بعد 5 ثوانٍ
}
// التمرير عند الضغط على زر "التالي"
next.addEventListener('click', () => {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
    resetAutoScroll();
});
// التمرير عند الضغط على زر "السابق"
prev.addEventListener('click', () => {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
    resetAutoScroll();
});
// بدء التمرير التلقائي
autoScroll();
