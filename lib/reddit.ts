export class RedditService {
  async getSubredditInfo(subreddit: string) {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`, {
        headers: {
          'User-Agent': 'OrganiGrow/1.0'
        }
      });
      
      if (!response.ok) return null;
      
      const data = await response.json();
      return {
        name: data.data.display_name,
        subscribers: data.data.subscribers,
        description: data.data.public_description,
        active_users: data.data.active_user_count
      };
    } catch (error) {
      console.error('Reddit API Error:', error);
      return null;
    }
  }

  async getHotPosts(subreddit: string, limit = 5) {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`, {
        headers: {
          'User-Agent': 'OrganiGrow/1.0'
        }
      });
      
      if (!response.ok) return [];
      
      const data = await response.json();
      return data.data.children.map((post: any) => ({
        title: post.data.title,
        score: post.data.score,
        num_comments: post.data.num_comments,
        url: `https://reddit.com${post.data.permalink}`,
        created: new Date(post.data.created_utc * 1000)
      }));
    } catch (error) {
      console.error('Reddit API Error:', error);
      return [];
    }
  }
}