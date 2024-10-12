document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        //Add Varibles from index.html (hint: Use document.get function)
        const name = document.getElementById("name").value;
        const message = document.getElementById("name").value;
        const email = document.getElementById("name").value;
        if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        } else {
            alert('Please fill all the fields');
        }
    });
});
//Add additional fields




NEW
