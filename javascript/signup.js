// Signup Page JavaScript

let myForm = document.querySelector('#signupForm');

myForm.onsubmit = (e) => {
    e.preventDefault();

    let inputBox = document.querySelectorAll(
        'input:not([type="submit"]):not([type="reset"])'
    );

    let formData = {};

    inputBox.forEach((input) => {
        formData[input.name] = input.value.trim();
    });

    // Empty validation
    for (let key in formData) {
        if (formData[key] === "") {
            alert("Please fill all fields");
            return;
        }
    }

    // Password validation
    if (formData.password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem('userData')) || [];

    // Check duplicate email
    let existingUser = users.find(user => user.email === formData.email);

    if (existingUser) {
        alert("User already exists with this email");
        return;
    }

    // Store user
    users.push(formData);
    localStorage.setItem('userData', JSON.stringify(users));

    alert("User Registered Successfully");

    // Redirect to login page
    window.location.href = "./login.html";
};

