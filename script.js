const mewo =
document.getElementById("mewo");

const dialogue =
document.getElementById("dialogue");

const dialogueName =
document.getElementById("dialogue-name");

const dialogueText =
document.getElementById("dialogue-text");

let action = null;

function showDialogue(
    name,
    text,
    callback = null
){

    dialogueName.textContent = name;

    dialogueText.textContent = text;

    action = callback;

    dialogue.classList.remove("hidden");
}

dialogue.addEventListener("click", () => {

    if(action){

        action();

        return;
    }

    dialogue.classList.add("hidden");
});

mewo.addEventListener("click", () => {

    showDialogue(
        "MEWO",
        "MEWO wants to show you something.",
        () => {

            window.location.href = "okay.mp4";

        }
    );

});
