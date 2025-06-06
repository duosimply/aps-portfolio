import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CppCode = `
struct TrieNode {
    bool isEnd = false;
    TrieNode* children[26] = {nullptr};
};

class Trie {
public:
    Trie() {
        root = new TrieNode();
    }

    void insert(const string& word) {
        TrieNode* node = root;
        for (char ch : word) {
            int i = ch - 'a';
            if (!node->children[i])
                node->children[i] = new TrieNode();
            node = node->children[i];
        }
        node->isEnd = true;
    }

    bool search(const string& word) {
        TrieNode* node = findNode(word);
        return node && node->isEnd;
    }

    bool startsWith(const string& prefix) {
        return findNode(prefix) != nullptr;
    }

private:
    TrieNode* root;

    TrieNode* findNode(const string& prefix) {
        TrieNode* node = root;
        for (char ch : prefix) {
            int i = ch - 'a';
            if (!node->children[i])
                return nullptr;
            node = node->children[i];
        }
        return node;
    }
};
`;

const Trie = () => {
  return (
    <SyntaxHighlighter language="cpp" style={duotoneDark} showLineNumbers>
      {CppCode}
    </SyntaxHighlighter>
  )
}

export default Trie