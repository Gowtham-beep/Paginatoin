Frontend - React
Infinite Scroll with Cursor Pagination
The frontend initially fetches a limited number of tasks.
As the user scrolls down, a new request is sent with the cursor to load more tasks.
When no more tasks are available, further requests stop automatically.
Implementation Steps
Fetch tasks from the backend using a cursor.
Append new tasks to the existing list.
Update the cursor to request the next batch.
Detect scroll position and load more tasks dynamically.
Example Infinite Scroll Handling in React:

```
const handleScroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
    fetchTasks();
  }
};```
