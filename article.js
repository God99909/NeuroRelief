let votes = Array(10).fill(0); // Store votes for each article

function vote(index, value) {
    votes[index] += value;
    document.getElementById(`vote-${index}`).textContent = votes[index];
}

// Function to handle three-dot menu toggling
document.addEventListener('click', function (event) {
    document.querySelectorAll('.menu').forEach(menu => {
        if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', function (event) {
            let menu = this.nextElementSibling;
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation(); // Prevents menu from closing immediately
        });
    });

    document.querySelectorAll('.post-comment').forEach(button => {
        button.addEventListener('click', function () {
            let input = this.previousElementSibling;
            if (input.value.trim() !== "") {
                let comment = document.createElement('p');
                comment.innerHTML = `<strong>You:</strong> ${input.value} <span class="reply-btn">Reply</span>`;
                this.parentNode.querySelector('.comments').appendChild(comment);
                input.value = "";
            }
        });
    });

    // Assign uploadArticle function to the menu
    document.querySelectorAll('.menu p.upload-article').forEach(option => {
        option.addEventListener('click', uploadArticle);
    });
});

// Function to open file selection dialog
function uploadArticle() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt,.doc,.docx,.pdf"; // Accepts text and document files
    input.style.display = "none";

    input.addEventListener("change", function () {
        if (input.files.length > 0) {
            alert(`File selected: ${input.files[0].name}`);
        }
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}
