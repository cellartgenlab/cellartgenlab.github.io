/* Cellartgen CMS publishing bridge.
   Published page records can update page SEO, selected text sections and images. */
(async function () {
  const pageKey = location.pathname.split('/').pop() || 'index.html';

  try {
    const response = await fetch('/api/public/pages', { credentials: 'same-origin' });
    if (!response.ok) return;

    const entries = await response.json();
    if (!Array.isArray(entries)) return;

    const pageEntries = entries.filter(entry => entry.pageKey === pageKey);

    // Apply page-level SEO from the page record (records without a selector).
    const pageRecord = pageEntries.find(entry => !entry.selector && entry.status === 'published');
    if (pageRecord) {
      if (pageRecord.seoTitle) document.title = pageRecord.seoTitle;
      if (pageRecord.metaDescription) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = 'description';
          document.head.appendChild(meta);
        }
        meta.content = pageRecord.metaDescription;
      }
    }

    pageEntries.filter(entry => entry.selector && entry.status === 'published').forEach(entry => {
      let nodes = [];
      try { nodes = [...document.querySelectorAll(entry.selector)]; }
      catch (error) { console.warn('Invalid CMS selector:', entry.selector); return; }

      const content = entry.htmlContent || entry.shortDescription || entry.description || entry.heroTitle || entry.title || '';
      nodes.forEach(node => {
        if (String(content).trim()) node.textContent = content;
        if (entry.image) {
          if (node.tagName === 'IMG') node.src = entry.image;
          else node.style.backgroundImage = `url("${String(entry.image).replace(/["\\]/g, '')}")`;
        }
      });
    });
  } catch (error) {
    console.warn('Cellartgen CMS content could not be loaded.', error);
  }
})();
