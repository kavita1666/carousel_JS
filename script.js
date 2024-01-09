const carouselItems = document.querySelectorAll('.carousel-items');
let currIndex = 0;

function showCurrentPage(index) {
    carouselItems.forEach((item) => {
        item.style.display = "none";
    })
    carouselItems[index].style.display = "block";
}

function showNextPage() {
    currIndex = (currIndex+1) % carouselItems.length;
    showCurrentPage(currIndex);
}

function showPreviousPage() {
    currIndex = (currIndex-1 + carouselItems.length) % carouselItems.length;
    showCurrentPage(currIndex);
}

showCurrentPage(currIndex);

document.getElementById('prevBtn').addEventListener('click', showPreviousPage);
document.getElementById('nextBtn').addEventListener("click", showNextPage);

