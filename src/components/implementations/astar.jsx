import CodeDropdown from '../CodeDropdown';

const CppCode = `
struct Node {
    int x, y;
    int g, h; // g = cost from start, h = heuristic
    Node* parent;

    Node(int x, int y, int g, int h, Node* parent = nullptr)
        : x(x), y(y), g(g), h(h), parent(parent) {}

    int f() const { return g + h; }
};

struct CompareNode {
    bool operator()(const Node* a, const Node* b) {
        return a->f() > b->f(); // min-heap
    }
};

int heuristic(int x1, int y1, int x2, int y2) {
    return abs(x1 - x2) + abs(y1 - y2); // Manhattan distance
}

bool isValid(int x, int y, const vector<vector<int>>& grid) {
    return x >= 0 && y >= 0 && x < grid.size() && y < grid[0].size() && grid[x][y] == 0;
}

void reconstructPath(Node* node) {
    vector<pair<int, int>> path;
    while (node) {
        path.push_back({node->x, node->y});
        node = node->parent;
    }
    reverse(path.begin(), path.end());

    cout << "Path found:\n";
    for (auto [x, y] : path)
        cout << "(" << x << ", " << y << ") ";
    cout << endl;
}

void aStar(const vector<vector<int>>& grid, pair<int, int> start, pair<int, int> goal) {
    priority_queue<Node*, vector<Node*>, CompareNode> openSet;
    vector<vector<bool>> visited(grid.size(), vector<bool>(grid[0].size(), false));

    Node* startNode = new Node(start.first, start.second, 0, heuristic(start.first, start.second, goal.first, goal.second));
    openSet.push(startNode);

    while (!openSet.empty()) {
        Node* current = openSet.top();
        openSet.pop();

        if (visited[current->x][current->y])
            continue;
        visited[current->x][current->y] = true;

        if (current->x == goal.first && current->y == goal.second) {
            reconstructPath(current);
            return;
        }

        vector<pair<int, int>> directions = {{0,1}, {1,0}, {0,-1}, {-1,0}};
        for (auto [dx, dy] : directions) {
            int nx = current->x + dx;
            int ny = current->y + dy;

            if (isValid(nx, ny, grid) && !visited[nx][ny]) {
                int g = current->g + 1;
                int h = heuristic(nx, ny, goal.first, goal.second);
                openSet.push(new Node(nx, ny, g, h, current));
            }
        }
    }

    cout << "No path found.\n";
}

`;

const snippet = [
  {
    content: CppCode
  }
]

const AStar = () => {
  return (
    <CodeDropdown items={snippet}/>
  );
}

export default AStar