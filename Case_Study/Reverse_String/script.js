function reverseString() {
    const input = document.getElementById("stringInput");
    const result = document.getElementById("result");

    const str = input.value;

    if (str === "") {
        alert("Please enter a string.");
        return;
    }

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    result.textContent = reversed;
}