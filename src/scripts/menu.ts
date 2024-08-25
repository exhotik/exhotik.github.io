const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.nodeName === "IMG") {
                setTimeout(() => { (entry.target as HTMLElement).style.opacity = "1"; }, 100)
            } else if (entry.target.nodeName === "H1") {
                setTimeout(() => { (entry.target as HTMLElement).style.opacity = "1"; }, 500)
            } else if (entry.target.nodeName === "P") {
                setTimeout(() => { (entry.target as HTMLElement).style.opacity = "1"; }, 800)
            } else if (entry.target.nodeName === "SECTION") {
                setTimeout(() => { (entry.target as HTMLElement).style.opacity = "1"; }, 1000)
            }
        }
    })
});

const hiddenElements = document.querySelectorAll('[observe-me]');
hiddenElements.forEach((el) => observer.observe(el))