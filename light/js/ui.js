export const UI = (() => {
    const previewContainer = document.getElementById("previewContainer");
    const imageCount = document.getElementById("image-count");
    const converterDiv = document.getElementById("converterDiv");
    const convertMoreBtn = document.getElementById("convertMoreBtn");

    const updateImageCount = (count) => {
        imageCount.textContent = count;
    };

    const createPreviewItem = (src, name, index) => {
        const div = document.createElement("div");
        div.classList.add("preview-item");
        div.innerHTML = `
            <img src="${src}" alt="preview-${index}">
            <span class="preview-name">${name}</span>
        `;
        previewContainer.appendChild(div);

        // Animación fade-in
        setTimeout(() => div.classList.add("visible"), 100);
    };

    const createDownloadLink = (blobUrl, name, index) => {
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = name.replace(/\.[^.]+$/, "") + ".webp";
        link.textContent = "Descargar ⬇";
        link.className = "btn outline downloadBtn";
        link.style.display = "block";
        previewContainer.querySelectorAll(".preview-item")[index].appendChild(link);
    };

    const toggleConverter = () => {
        converterDiv.classList.toggle("hidden");
    };

    const showConvertMoreBtn = () => convertMoreBtn.classList.remove("hidden");
    const hideConvertMoreBtn = () => convertMoreBtn.classList.add("hidden");

    const clearPreview = () => {
        previewContainer.innerHTML = "";
        updateImageCount(0);
    };

    const addPaddingIfImage = (imageCount) => {
        if( imageCount > 0 && !previewContainer.classList.contains('padding-preview')){
            previewContainer.classList.add('padding-preview');
            return
        }
        if( imageCount == 0 && previewContainer.classList.contains('padding-preview')){
            previewContainer.classList.remove('padding-preview');
        }
    }

    // === SPINNER ===
    const insertSpinner = () => {
        previewContainer.innerHTML = '<div class="spinner" id="spinner"></div>';
    };

    const showSpinner = () => {
        const spinner = document.getElementById("spinner");
        if(spinner) spinner.style.display = "block";
    };

    const hideSpinner = () => {
        const spinner = document.getElementById("spinner");
        if(spinner) spinner.style.display = "none";
    };

    return {
        updateImageCount,
        createPreviewItem,
        createDownloadLink,
        toggleConverter,
        showConvertMoreBtn,
        hideConvertMoreBtn,
        clearPreview,
        addPaddingIfImage,
        insertSpinner,
        showSpinner,
        hideSpinner
    };
})();
