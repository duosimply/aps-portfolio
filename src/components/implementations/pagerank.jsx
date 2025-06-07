import CodeDropdown from '../CodeDropdown';

const CppCode = `
vector<double> computePageRank(const vector<vector<int>>& graph, int iterations = 100, double damping = 0.85, double epsilon = 1e-6) {
    int n = graph.size();
    vector<double> rank(n, 1.0 / n);
    vector<int> out_links(n);

    for (int i = 0; i < n; i++)
        out_links[i] = graph[i].size();

    for (int iter = 0; iter < iterations; iter++) {
        vector<double> new_rank(n, (1.0 - damping) / n);

        for (int u = 0; u < n; u++) {
            if (out_links[u] == 0) {
                for (int v = 0; v < n; v++)
                    new_rank[v] += damping * rank[u] / n;
            } else {
                for (int v : graph[u])
                    new_rank[v] += damping * rank[u] / out_links[u];
            }
        }

        double diff = 0;
        for (int i = 0; i < n; i++)
            diff += fabs(rank[i] - new_rank[i]);

        rank = new_rank;
        if (diff < epsilon)
            break;
    }

    return rank;
}
`;

const snippet = [
  {
    content: CppCode
  }
]

const PageRank = () => {
  return (
    <CodeDropdown items={snippet}/>
  )
}

export default PageRank