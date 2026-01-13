/* ===============================
   MEMBERSHIP FORM VALIDATION
   =============================== */

let membershipForm = document.getElementById("membershipForm");

if (membershipForm) {
    membershipForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();
        let message = document.getElementById("formMessage");

        if (name === "" || email === "" || age === "") {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        } else if (age < 5) {
            message.textContent = "You must be at least 5 years old to join.";
            message.style.color = "red";
        } else {
            message.textContent = "Registration successful!";
            message.style.color = "green";
        }
    });
}


/* ===============================
   EVENTS SEARCH / FILTER
   =============================== */

let searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        let filter = searchInput.value.toLowerCase();
        let events = document.querySelectorAll(".event");

        events.forEach(function (event) {
            let text = event.innerText.toLowerCase();

            if (text.includes(filter)) {
                event.style.display = "";
            } else {
                event.style.display = "none";
            }
        });
    });
}


/* ===============================
   CONTACT FORM VALIDATION
   =============================== */

let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let messageText = document.getElementById("message").value.trim();
        let feedback = document.getElementById("contactMessage");

        if (name === "" || email === "" || messageText === "") {
            feedback.textContent = "Please fill in all fields.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Message sent successfully!";
            feedback.style.color = "green";
        }
    });
}
