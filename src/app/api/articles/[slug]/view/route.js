import { incrementViews } from '@/lib/article-store';

export async function POST(request, { params }) {
  try {
    const { slug } = await params;
    const stats = incrementViews(slug);
    return Response.json(stats);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
