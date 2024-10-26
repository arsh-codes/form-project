// Name Inputs
const fullNameInput = document.querySelector("#full-name");

// Age Input
const ageInput = document.querySelector("#age");

// Gender Radio Buttons
const maleRadio = document.querySelector("#male");
const femaleRadio = document.querySelector("#female");
const notSpecifiedRadio = document.querySelector("#not-specified");

// Contact Information
const phoneNumberInput = document.querySelector("#phone-number");
const emailInput = document.querySelector("#email");

// Password and Confirm Password
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

// Subscription Checkboxes
const newsCheckbox = document.querySelector("#news");
const promosCheckbox = document.querySelector("#promos");
const eventsCheckbox = document.querySelector("#events");

// Address Section
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const stateInput = document.querySelector("#state");
const zipCodeInput = document.querySelector("#zip-code");
const countrySelect = document.querySelector("#country");

// Submit Button
const submitButton = document.querySelector("#submit-button");

// Warning texts
const nameWarningText = document.querySelector("#name-warning-text");
const ageWarningText = document.querySelector("#age-warning-text");
const phoneWarningText = document.querySelector("#phone-warning-text");
const emailWarningText = document.querySelector("#email-warning-text");
const passwordWarningText = document.querySelector("#password-warning-text");
const confirmPasswordWarningText = document.querySelector(
    "#confirm-password-warning-text"
);
const addressWarningText = document.querySelector("#address-warning-text");
const cityWarningText = document.querySelector("#city-warning-text");
const stateWarningText = document.querySelector("#state-warning-text");
const zipCodeWarningText = document.querySelector("#zip-code-warning-text");


// Add event listener to the submit button
submitButton.addEventListener("click", (event) => {
    const validationStatus = performAllValidations();
    if (validationStatus !== "success") {
        event.preventDefault(); // Prevents form submission if any error exists
    }
    else{
        alert('submitted')
    }
});



function performAllValidations() {
    // event.preventDefault();

    // Reset warning texts
    nameWarningText.innerText = "";
    ageWarningText.innerText = "";
    phoneWarningText.innerText = "";
    emailWarningText.innerText = "";
    passwordWarningText.innerText = "";
    confirmPasswordWarningText.innerText = "";
    addressWarningText.innerText = "";
    cityWarningText.innerText = "";
    stateWarningText.innerText = "";
    zipCodeWarningText.innerText = "";

    // Get current input values
    const fullNameValue = fullNameInput.value.trim();
    const ageValue = ageInput.value.trim();
    const phoneNumberValue = phoneNumberInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const addressValue = addressInput.value.trim();
    const cityValue = cityInput.value.trim();
    const stateValue = stateInput.value.trim();
    const zipCodeValue = zipCodeInput.value.trim();


    // Name validation
    if (fullNameValue === "") {
        nameWarningText.innerText = "Full name is required.";
        return "nameError";
    } else if (/\d/.test(fullNameValue)) {
        nameWarningText.innerText = "Full name should not contain numbers.";
        return "nameError";
    }

    // Age validation
    if (ageValue === "") {
        ageWarningText.innerText = "Age is required.";
        return "ageError";
    } else if (!/^\d+$/.test(ageValue)) {
        ageWarningText.innerText = "Age must be a numerical value.";
        return "ageError";
    }

    // Phone number validation
    if (phoneNumberValue === "") {
        phoneWarningText.innerText = "Phone number is required.";
        return "phoneError";
    } else if (!/^\d{10}$/.test(phoneNumberValue)) {
        // Assuming a 10-digit phone number format
        phoneWarningText.innerText = "Phone number must be 10 digits.";
        return "phoneError";
    }

    // Email validation
    if (emailValue === "") {
        emailWarningText.innerText = "Email address is required.";
        return "emailError";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        // Basic email format validation
        emailWarningText.innerText = "Invalid email format.";
        return "emailError";
    }

    // Password validation
    if (passwordValue === "") {
        passwordWarningText.innerText = "Password is required.";
        return "passwordError";
    } else if (passwordValue.length < 6) {
        // Minimum length validation
        passwordWarningText.innerText =
            "Password must be at least 6 characters.";
        return "passwordError";
    }

    // Confirm Password validation
    if (confirmPasswordValue !== passwordValue) {
        confirmPasswordWarningText.innerText = "Passwords do not match.";
        return "confirmPasswordError";
    }

    // Address validation
    if (addressValue === "") {
        addressWarningText.innerText = "Address is required.";
        return "addressError";
    }

    // City validation
    if (cityValue === "") {
        cityWarningText.innerText = "City is required.";
        return "cityError";
    }

    // State validation
    if (stateValue === "") {
        stateWarningText.innerText = "State is required.";
        return "stateError";
    }

    // Zip Code validation
    if (zipCodeValue === "") {
        zipCodeWarningText.innerText = "Zip code is required.";
        return "zipCodeError";
    } else if (!/^\d{5}$/.test(zipCodeValue)) {
        // Assuming a 5-digit zip code format
        zipCodeWarningText.innerText = "Zip code must be 5 digits.";
        return "zipCodeError";
    }

    // If all validations pass
    return "success"; // Indicate success or submit the form
}


