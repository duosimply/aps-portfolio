import CodeDropdown from '../CodeDropdown';

const CppCode = `
struct Query {
    int L, R, idx;
};

int block_size;

bool compare(Query a, Query b) {
    int block_a = a.L / block_size;
    int block_b = b.L / block_size;
    if (block_a != block_b)
        return block_a < block_b;
    return a.R < b.R;
}

vector<int> mosAlgorithm(vector<int>& arr, vector<Query>& queries) {
    block_size = sqrt(arr.size());
    sort(queries.begin(), queries.end(), compare);

    vector<int> ans(queries.size());
    int currL = 0, currR = -1, currSum = 0;

    for (Query q : queries) {
        while (currL > q.L) currSum += arr[--currL];
        while (currR < q.R) currSum += arr[++currR];
        while (currL < q.L) currSum -= arr[currL++];
        while (currR > q.R) currSum -= arr[currR--];
        ans[q.idx] = currSum;
    }

    return ans;
}
`;

const snippet = [
  {
    content: CppCode
  }
]

const MOS = () => {
  return (
    <CodeDropdown items={snippet}/>
  )
}

export default MOS