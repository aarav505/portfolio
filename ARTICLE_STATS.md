# Article Stats System

Views and likes combine **seed baselines** (rigged starting numbers) with **real interactions** (dynamic increments from actual visitors).

## How It Works

1. **Seeds (baseline)**: Configured in `src/lib/article-seeds.js`. These are the numbers you want articles to start with.
2. **Real stats**: Stored in `data/article-stats.json` — only actual view increments and user likes.
3. **Displayed count** = seed + real

So an article with seed `1247` views that gets opened 5 times shows **1252** views. Likes work the same way.

### Seed configuration

Edit `src/data/article-seed-overrides.json`:

```json
{
  "building-dsfl-a-full-stack-fantasy-league": { "views": 1247, "likes": 189 },
  "what-3-years-of-coding-at-the-doon-school-taught-me": { "views": 982, "likes": 156 }
}
```

Articles without an override get auto-generated seeds based on publish date (older posts accumulate passive daily views for a natural curve).

You can also set `seedViews` / `seedLikes` directly on an article object in `src/data/articles.js`.

## API Endpoints

- `GET /api/articles/[slug]/stats` — public display stats
- `GET /api/articles/[slug]/like` — stats + whether this device liked (sets userId cookie)
- `POST /api/articles/[slug]/view` — increment real views, return display stats
- `POST /api/articles/[slug]/like` — toggle like for this device
- `POST /api/articles/[slug]/init` — set real stats only (seeds are unchanged)

## CLI

```bash
# See seed baselines for all articles
node scripts/init-article-stats.js --seeds

# See display breakdown (seed + real)
node scripts/init-article-stats.js --list

# Set real interaction counts (display = seed + these values)
node scripts/init-article-stats.js building-dsfl-a-full-stack-fantasy-league 12 3

# Reset real stats for one article (seeds still apply)
node scripts/init-article-stats.js --reset building-dsfl-a-full-stack-fantasy-league
```

## Storage

`data/article-stats.json` stores **real interactions only**:

```json
{
  "building-dsfl-a-full-stack-fantasy-league": {
    "views": 12,
    "likes": 3,
    "liked": ["user_a1b2c3d4"]
  }
}
```

With seed `{ views: 1247, likes: 189 }`, the UI shows **1259 views** and **192 likes**.

## Notes

- `data/` is gitignored — real stats stay server-local
- Seeds are in source control and deploy with the site
- Views increment on each article open; likes toggle per device (cookie-based userId)
- No init script needed on first deploy — seeds alone give credible counts immediately
