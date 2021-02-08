const header = document.querySelector(".batchspace-header");
const el = document.querySelector(".scroll_observer");    
const options = {
    root: null,
    rootMargin: '0px',
    threshold: [1]
}

function callback (entries, observer) {
    entries.forEach(entry => {
        entry.isIntersecting ? header.classList.remove('stuck') : header.classList.add('stuck');
    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(el);