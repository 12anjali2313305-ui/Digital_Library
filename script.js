
// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ==========================
// Live Search
// ==========================

const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", () => {

    const searchText = searchInput.value.toLowerCase();

    bookCards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(searchText))
        {
            card.style.display = "block";
        }
        else
        {
            card.style.display = "none";
        }

    });

});


// ==========================
// Category Filter
// ==========================

const categoryButtons = document.querySelectorAll(".category-buttons button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.textContent.toLowerCase();

        bookCards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if(category === "all")
            {
                card.style.display = "block";
            }

            else if(title.includes(category))
            {
                card.style.display = "block";
            }

            else
            {
                card.style.display = "none";
            }

        });

    });

});


// ==========================
// Read More Button
// ==========================

const readButtons = document.querySelectorAll(".book-card button");

readButtons.forEach(button => {

    button.addEventListener("click", () => {

        const bookTitle =
            button.parentElement.querySelector("h3").textContent;

        alert("You selected: " + bookTitle);

    });

});
