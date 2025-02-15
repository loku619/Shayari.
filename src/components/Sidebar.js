import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  // Dummy data for recent posts and comments
  const recentPosts = [
    { id: 1, title: 'The Beauty of Nature' },
    { id: 2, title: 'A Walk in the Woods' },
    { id: 3, title: 'The Silent Night' },
  ];

  const recentComments = []; // No comments to show

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      {/* Recent Posts Section */}
      <Typography variant="h6" gutterBottom>
        Recent Posts
      </Typography>
      <List>
        {recentPosts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>

      {/* Recent Comments Section */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Recent Comments
      </Typography>
      {recentComments.length > 0 ? (
        <List>
          {recentComments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText primary={comment.text} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="textSecondary">
          No comments to show.
        </Typography>
      )}
    </Paper>
  );
};

export default Sidebar;