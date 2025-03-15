// Load the full article details dynamically
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const title = params.get("title");
    const author = params.get("author");
    const content = params.get("content");

    if (title) document.getElementById("article-title").textContent = title;
    if (author) document.getElementById("article-author").textContent = "By: " + author;
    if (content) document.getElementById("article-content").textContent = content;
});

// Voting system
let votes = [0];

function vote(index, value) {
    votes[index] += value;
    document.getElementById(`vote-${index}`).textContent = votes[index];
}

// Comment system
document.querySelector(".post-comment").addEventListener("click", function () {
    let input = document.querySelector(".comment-input");
    if (input.value.trim() !== "") {
        let comment = document.createElement("p");
        comment.innerHTML = `<strong>You:</strong> ${input.value} <span class="reply-btn">Reply</span>`;
        document.querySelector(".comments").appendChild(comment);
        input.value = "";
    }
});
