import { toggleLike, getArticleStats } from '@/lib/article-store';
import crypto from 'crypto';

function getUserId(request) {
  const cookieHeader = request.headers.get('cookie');

  if (cookieHeader) {
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});

    if (cookies.userId) {
      return cookies.userId;
    }
  }

  return `user_${crypto.randomBytes(8).toString('hex')}`;
}

function withUserCookie(response, userId) {
  response.headers.set(
    'Set-Cookie',
    `userId=${userId}; Path=/; Max-Age=31536000; SameSite=Lax`
  );
  return response;
}

export async function POST(request, { params }) {
  try {
    const { slug } = await params;
    const userId = getUserId(request);
    const stats = toggleLike(slug, userId);
    const response = Response.json(stats);
    return withUserCookie(response, userId);
  } catch (error) {
    console.error('Error toggling like:', error);
    return Response.json({ error: 'Failed to toggle like' }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const userId = getUserId(request);
    const stats = getArticleStats(slug, userId);
    const response = Response.json(stats);
    return withUserCookie(response, userId);
  } catch (error) {
    console.error('Error fetching like status:', error);
    return Response.json({ likes: 0, liked: false });
  }
}
