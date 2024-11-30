const copyText = document.querySelector('textarea[name=copyTxt]');
const finalText = document.querySelector('textarea[name=finalTxt]');
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
    const temp = copyText.value;
    copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
    const temp = copyText.value;
    finalText.value = temp;
});

function copyToClipBoard(str) {
    const outputContainer = document.querySelector(".output-container");
    const textarea = document.createElement("textarea");
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textarea);

    output.innerHTML = "<h3>Content copied</h3>";
    output.classList.add('added');

    setTimeout(() => {
        output.classList.remove("added");
        output.innerHTML = "";
    }, 2000);
}











