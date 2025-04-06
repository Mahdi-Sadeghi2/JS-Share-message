// Finding hashed message
const { hash } = window.location;

// Unhash message with atob module
const message = atob(hash.replace("#", ""));
// If there is a message unhide that
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  // Put the message in a h1 tag in html file
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default browser behavior to submit the form
  // Hide the user message after clicked on button
  document.querySelector("#message-form").classList.add("hide");
  // Unhide the like that related to user message after clicked on button
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  // Encrypt user message to 64 based characters with btoa module
  const encrypted = btoa(input.value);
  // Share the message with your friends as encrypted
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`; //Encrypted is a id for an input in html file;
  linkInput.select();
});
