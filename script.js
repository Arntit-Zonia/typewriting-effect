let index = 0;
let count = 0;

(function typewriting() {
    const words = ["Self-Taught", "Web Developer"];
    const output = document.querySelector(".text-output");
    const currentWord = words[count];

    if (index < currentWord.length) {
        output.textContent += currentWord.charAt(index);
        index++;
    } else if (index === currentWord.length) {
        count++;
        index = 0;
        output.textContent = "";
    }
    if (count === words.length) count = 0;

    setTimeout(typewriting, 300);
})();
