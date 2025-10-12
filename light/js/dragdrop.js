export const DragDrop = (() => {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("fileInput");

  const init = (handleFilesCallback) => {
    dropzone.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", (e) => handleFilesCallback([...e.target.files]));

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files.length) handleFilesCallback([...e.dataTransfer.files]);
    });
  };

  return { init };
})();
