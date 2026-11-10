
// Get all images from the gallery
let images = document.querySelectorAll(".gallery img");

// Function when mouse moves over an image
function upDate(previewPic) {
    console.log("Mouse is over an image");

    // Add your image preview behavior here
}

// Function when mouse leaves an image
function unDo() {
    console.log("Mouse left the image");

    // Restore the original gallery behavior
}

// Function when keyboard focuses on an image
function focusImage(previewPic) {
    console.log("Keyboard focused on an image");

    // Add your focus behavior here
}

// Function when keyboard leaves an image
function blurImage() {
    console.log("Keyboard left the image");

    // Restore the original behavior
}

// Function to add tabindex to all images
function addTabIndex() {
    console.log("Page loaded - adding tabindex");

    // Loop through every image
    for (let i = 0; i < images.length; i++) {

        // Add tabindex attribute
        images[i].setAttribute("tabindex", "0");
    }
}

// Run the function when the page loads
window.onload = addTabIndex;

// Add event listeners to every image
for (let i = 0; i < images.length; i++) {

    images[i].onmouseover = upDate;
    images[i].onmouseleave = unDo;

    images[i].onfocus = focusImage;
    images[i].onblur = blurImage;
}
