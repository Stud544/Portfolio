document.addEventListener("DOMContentLoaded", function () {
  // Fetch and parse JSON data
  fetch('json/images.json')
    .then(response => response.json())
    .then(data => {
      const galleryContainer = document.getElementById('imageGallery');
      data.forEach(image => {
        // Create anchor element
        const anchorElement = document.createElement('a');
        anchorElement.href = image.fullSizeImage; // Set the URL of the full-size image
        anchorElement.target = '_blank'; // Open link in a new tab or window

        // Create image element with description
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.description;
        imgElement.title = image.description;

        // Create a container for each image
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('gallery-item');
        imgContainer.appendChild(anchorElement); // Append the anchor element
        anchorElement.appendChild(imgElement); // Append the image to the anchor

        // Create an overlay for the description
        const descriptionOverlay = document.createElement('div');
        descriptionOverlay.classList.add('description-overlay');
        descriptionOverlay.innerHTML = `<p>${image.description}</p>`;
        imgContainer.appendChild(descriptionOverlay);

        // Append the image container to the gallery
        galleryContainer.appendChild(imgContainer);

        // Add click event listener to open full-size image in a modal
        anchorElement.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default behavior of the anchor
          // You can implement the logic to open the full-size image in a modal here
          // For simplicity, let's just open it in a new window for now
          window.open(image.src, '_blank');
        });
      });
    })
    .catch(error => console.error('Error fetching images:', error));
});
