let form = document.querySelector('#loginForm');

form.onsubmit = (e) => {
    e.preventDefault();

    let email = document.querySelector('[name="email"]').value.trim();
    let password = document.querySelector('[name="password"]').value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem('userData')) || [];

    let validUser = users.find(user => 
        user.email === email && user.password === password
    );

    if (validUser) {
        alert("Login Successful");

        // optional: store current user
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));

        window.location.href = 'index.html'; // or dashboard
    } else {
        alert("Invalid email or password");
    }
};