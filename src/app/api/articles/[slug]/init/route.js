import { setInitialStats } from '@/lib/article-store';

export async function POST(request, { params }) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { views = 0, likes = 0 } = body;

    const stats = setInitialStats(slug, views, likes);
    return Response.json(stats);
  } catch (error) {
    console.error('Error setting initial stats:', error);
    return Response.json({ error: 'Failed to set initial stats' }, { status: 500 });
  }
}
