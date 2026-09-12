const copyButton = document.querySelector("#copy-bibtex");
const copyStatus = document.querySelector("#copy-status");
const citation = document.querySelector("#bibtex-code");

copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyStatus.textContent = "BibTeX copied to clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent =
      "Citation selected. Press Ctrl+C (or ⌘C on Mac) to copy.";
  }
});

const dialog = document.querySelector("#figure-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogCaption = document.querySelector("#dialog-caption");

// Figure links still open the original image when JavaScript or <dialog> is unavailable.
if (typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-lightbox]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      dialogImage.src = link.href;
      dialogImage.alt = link.querySelector("img").alt;
      dialogCaption.textContent =
        link.closest("figure").querySelector("figcaption")?.textContent ?? "";
      dialog.showModal();
    });
  });
  document
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
}
