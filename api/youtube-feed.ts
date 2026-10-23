
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCWIXEldauH5QwW5Qpx7R7bg'
    );

    if (!response.ok) {
      return res.status(502).json({
        error: 'YouTube feed unavailable',
      });
    }

    const xml = await response.text();

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader(
      'Cache-Control',
      's-maxage=900, stale-while-revalidate=3600'
    );

    return res.status(200).send(xml);
  } catch {
    return res.status(500).json({
      error: 'Unable to load YouTube feed',
    });
  }
}
