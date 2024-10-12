function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.

    //create a variable to store the tag with our text we want to change
    counter_number = document.getElementById('counter-number');

    //chnage the text of our tag, in this case incriment its number
    counter_number.innerHTML = parseInt(counter_number.innerHTML) + 1;
    }
