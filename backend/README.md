Backend - Node.js (Express)
Cursor-Based Pagination
Instead of fetching all records at once, the backend returns a limited number of tasks along with a nextCursor value.
The cursor represents the last fetched task’s unique identifier (e.g., id or createdAt).
The frontend includes this cursor in the next request to fetch the next batch of tasks.
Indexing for Optimization
To speed up querying and improve database performance, an index is added on the column used for pagination.
For example, if pagination is based on id:

sql
Copy
Edit
CREATE INDEX idx_task_id ON tasks (id);
If pagination is based on timestamps (createdAt):

sql
Copy
Edit
CREATE INDEX idx_created_at ON tasks (created_at);
Why Indexing?

Without an index, querying large datasets requires scanning the entire table, which is slow.
Indexing helps quickly locate the starting point for fetching the next set of records.
