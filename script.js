const categorySelect = document.getElementById('categorySelect');
const pdfEmbeds = document.querySelectorAll('.pdf-embed');

categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;

    pdfEmbeds.forEach(pdfEmbed => {
        const categoriaPDF = pdfEmbed.getAttribute('data-categoria');
        if (selectedCategory === 'all' || categoriaPDF === selectedCategory) {
            pdfEmbed.style.display = 'block';
        } else {
            pdfEmbed.style.display = 'none';
        }
    });
});