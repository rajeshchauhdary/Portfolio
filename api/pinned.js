export default async function handler(req, res) {
  try {
    const response = await fetch('https://github.com/rajeshchauhdary', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    if (!response.ok) {
      return res.status(200).json({ pinned: [] });
    }
    const html = await response.text();
    const pinnedSection = html.split('js-pinned-items-reorder-container')[1] || html;
    const matches = [...pinnedSection.matchAll(/<span class="repo"[^>]*>\s*([^<\s]+)\s*<\/span>/g)];
    const pinned = [...new Set(matches.map((m) => m[1].trim()))];

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ pinned });
  } catch {
    return res.status(200).json({ pinned: [] });
  }
}
