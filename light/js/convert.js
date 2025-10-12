import { UI } from "./ui.js";

export const Converter = (() => {
  const MAX_IMAGES = 3;

  let files = [];

  const handleFiles = (selectedFiles) => {
    if (files.length + selectedFiles.length > MAX_IMAGES) {
      alert(`Solo puedes seleccionar hasta ${MAX_IMAGES} imágenes.`);
      UI.updateImageCount(files.length);
      UI.addPaddingIfImage(files.length);
      return;
    }

    const imageFiles = selectedFiles.filter(f => f.type.startsWith("image/"));
    files.push(...imageFiles);

    UI.clearPreview();

    generatePreviews(files);

    UI.updateImageCount(files.length);
    UI.addPaddingIfImage(files.length);
  };

  const convertImages = async() => {
    if (!files.length) {
      alert("Primero cargá imágenes.");
      return;
    }

    UI.toggleConverter();
    UI.showConvertMoreBtn();

    document.querySelectorAll(".downloadBtn").forEach(btn => btn.remove());

    UI.insertSpinner();
    UI.showSpinner();

    await new Promise(r => setTimeout(r, 200));

    UI.clearPreview();

    generatePreviews(files);

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            UI.createDownloadLink(url, file.name, index);
          }, "image/webp", 0.9);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const resetConverter = () => {
    files = [];
    UI.clearPreview();
    UI.toggleConverter();
    UI.hideConvertMoreBtn();
    UI.addPaddingIfImage(0);
  };

  const generatePreviews = (fileArray) => {
  fileArray.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      UI.createPreviewItem(event.target.result, file.name, index);
    };
    reader.readAsDataURL(file);
  });
};

  return {
    handleFiles,
    convertImages,
    resetConverter,
  };
})();
