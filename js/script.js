const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

btnOpenModal.addEventListener("click",function(){
    modal.classList.remove('hidden');
    modal.animate([
        { transform: "translateX(-100%)"},
        { transform: "translateX(0)"}
    ], {
        duration: 1500,
    });
})

btnCloseModal.addEventListener("click", function(){
    setTimeout(function(){
        modal.classList.add('hidden');
    },1500)
    
    modal.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(-100%)" }
    ], {
        duration: 1500,
    });
})
