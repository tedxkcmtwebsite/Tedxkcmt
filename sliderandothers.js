const imageUrls = [
    "./Slider Images/Speakers.jpg",
    "./Slider Images/Nisha Jose.jpg",
    "./Slider Images/Murshid Basheer.jpg",
    "./Slider Images/Reshma.jpg",
    "./Slider Images/Gokul Bijuraj.jpg",
    "./Slider Images/Rythom.jpg",
    "./Slider Images/Sue Ann.jpg",
    "./Slider Images/The Baby Jean.jpg",
    "./Slider Images/Riya Shibu.png"
];

const slider = document.getElementById("imageSlider");
let currentIndex = 1; // Start at the first real image

function loadImages() {
    // Clone first and last images for smooth looping
    const firstClone = document.createElement("div");
    firstClone.classList.add("slide");
    firstClone.innerHTML = `<img src="${imageUrls[0]}" alt="Clone First">`;

    const lastClone = document.createElement("div");
    lastClone.classList.add("slide");
    lastClone.innerHTML = `<img src="${imageUrls[imageUrls.length - 1]}" alt="Clone Last">`;

    slider.appendChild(lastClone); // Append last image at the beginning

    imageUrls.forEach(url => {
        let div = document.createElement("div");
        div.classList.add("slide");
        div.innerHTML = `<img src="${url}" alt="">`;
        slider.appendChild(div);
    });

    slider.appendChild(firstClone); // Append first image at the end
    slider.style.transform = `translateX(-100%)`; // Start at the first real image
}

function updateSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    if (currentIndex >= imageUrls.length) {
        slider.style.transition = "none"; // Disable animation for seamless effect
        currentIndex = 0; // Instantly move to first real image
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            currentIndex = 1; // Move to first real image
            slider.style.transition = "transform 0.5s ease-in-out";
            updateSlide();
        }, 50);
    } else {
        currentIndex++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        slider.style.transition = "none"; // Disable animation for seamless effect
        currentIndex = imageUrls.length; // Instantly move to last real image
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            currentIndex = imageUrls.length - 1; // Move to last real image
            slider.style.transition = "transform 0.5s ease-in-out";
            updateSlide();
        }, 50);
    } else {
        currentIndex--;
        updateSlide();
    }
}

function startAutoSlide() {
    setInterval(nextSlide, 10000); // Change image every 10 seconds
}

loadImages();
startAutoSlide();

// back to top

    // Show/hide button when scrolling
    window.onscroll = function () {
        let btn = document.getElementById("backToTop");
        if (document.documentElement.scrollTop > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // Smooth scroll to top
    document.getElementById("backToTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

// ensure refresh on page reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
