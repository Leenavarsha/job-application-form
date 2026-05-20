document.addEventListener("DOMContentLoaded", () => {
    const appForm = document.getElementById("applicationForm");

    appForm.addEventListener("submit", (event) => {
        event.preventDefault();

        resetFormErrors();

        const nameInput = document.getElementById("fullName").value.trim();
        const emailInput = document.getElementById("userEmail").value.trim();
        const phoneInput = document.getElementById("userPhone").value.trim();
        const messageInput = document.getElementById("userMessage").value.trim();

        let isValid = true;

        // Name validation
        if (nameInput === "") {
            displayError("nameError", "Full name is required.");
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput === "") {
            displayError("emailError", "Email address is required.");
            isValid = false;
        } else if (!emailRegex.test(emailInput)) {
            displayError("emailError", "Enter a valid email address.");
            isValid = false;
        }

        // Phone validation (10 digits only)
        const phoneRegex = /^[0-9]{10}$/;

        if (phoneInput === "") {
            displayError("phoneError", "Phone number is required.");
            isValid = false;
        } else if (!phoneRegex.test(phoneInput)) {
            displayError("phoneError", "Enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Message validation
        if (messageInput === "") {
            displayError("messageError", "Please enter your message.");
            isValid = false;
        }

        // Success
        if (isValid) {
            alert("Application submitted successfully!");
            appForm.reset();
        }
    });

    function displayError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function resetFormErrors() {
        const errors = document.querySelectorAll(".error-msg");
        errors.forEach(error => {
            error.textContent = "";
        });
    }
});