const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

btnOpenModal.addEventListener("click", function() {
    modal.style.animation = "slide-in 1.5s";
    modal.classList.remove('hidden');
});

btnCloseModal.addEventListener("click", function() {
    modal.style.animation = "slide-out 1.5s";
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1500);
});

