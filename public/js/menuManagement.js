document.addEventListener("DOMContentLoaded", () => {

    const imageUrlInput = document.querySelector('input[name="imageUrl"]');
    const previewImage = document.createElement('img');
    previewImage.style.display = "none";
    previewImage.style.width = "100px";
    previewImage.style.height = "100px";
    previewImage.style.marginTop = "10px";
    previewImage.style.borderRadius = "5px";

    if (imageUrlInput) {
        imageUrlInput.parentNode.appendChild(previewImage);
        
        imageUrlInput.addEventListener("input", () => {
            previewImage.src = imageUrlInput.value;
            previewImage.style.display = imageUrlInput.value ? "block" : "none";
        });
    }

    
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
            }
        });
    });
});
