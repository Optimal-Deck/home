import { DragDrop } from "./dragdrop.js";
import { Converter } from "./convert.js";

document.addEventListener("DOMContentLoaded", () => {
  DragDrop.init(Converter.handleFiles);

  document.getElementById("convertBtn").addEventListener("click", Converter.convertImages);
  document.getElementById("convertMoreBtn").addEventListener("click", Converter.resetConverter);
});
