function countVowels() {

    const paragraph = document.getElementById("paragraphInput").value;
    const result = document.getElementById("vowelCount");

    if (paragraph.trim() === "") {
        alert("Please enter a paragraph.");
        return;
    }

    let count = 0;

    for (let i = 0; i < paragraph.length; i++) {

        let character = paragraph[i].toLowerCase();

        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            count++;
        }
    }

    result.textContent = count;
}