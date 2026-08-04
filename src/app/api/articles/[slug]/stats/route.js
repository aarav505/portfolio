import { getArticleStats } from '@/lib/article-store';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const stats = getArticleStats(slug);
    return Response.json(stats);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
