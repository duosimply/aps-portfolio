import CodeDropdown from '../CodeDropdown';

const CppCode = `
struct Point {
    double x, y;
};

struct KDNode {
    Point point;
    KDNode *left = nullptr, *right = nullptr;
};

class KDTree {
public:
    KDNode* insert(KDNode* root, Point point, int depth = 0) {
        if (!root) {
            root = new KDNode{point};
            return root;
        }

        int axis = depth % 2; // 0 for x, 1 for y
        if ((axis == 0 && point.x < root->point.x) || (axis == 1 && point.y < root->point.y))
            root->left = insert(root->left, point, depth + 1);
        else
            root->right = insert(root->right, point, depth + 1);

        return root;
    }

    Point nearest(KDNode* root, Point target, int depth = 0, Point best = {1e9, 1e9}) {
        if (!root) return best;

        if (distance(target, root->point) < distance(target, best))
            best = root->point;

        int axis = depth % 2;
        KDNode* next = (axis == 0 && target.x < root->point.x) || (axis == 1 && target.y < root->point.y)
                       ? root->left : root->right;
        KDNode* other = (next == root->left) ? root->right : root->left;

        best = nearest(next, target, depth + 1, best);

        double split_dist = (axis == 0 ? fabs(root->point.x - target.x) : fabs(root->point.y - target.y));
        if (split_dist < distance(target, best))
            best = nearest(other, target, depth + 1, best);

        return best;
    }

private:
    double distance(Point a, Point b) {
        return sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y));
    }
};
`;

const snippet = [
  {
    content: CppCode
  }
]

const KDTree = () => {
  return (
    <CodeDropdown items={snippet}/>
  )
}

export default KDTree