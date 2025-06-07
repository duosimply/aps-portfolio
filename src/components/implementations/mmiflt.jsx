import CodeDropdown from '../CodeDropdown';

const CppCode = `
int modPower(int base, int exp, int mod) {
    int result = 1;
    base %= mod;

    while (exp > 0) {
        if (exp % 2 == 1)  // If exp is odd
            result = (1LL * result * base) % mod;
        base = (1LL * base * base) % mod;
        exp /= 2;
    }
    return result;
}

// Fermat's Little Theorem-based Modular Inverse
int modInverse(int a, int mod) {
    return modPower(a, mod - 2, mod);
}
`;

const snippet = [
  {
    content: CppCode
  }
]

const MMI = () => {
  return (
    <CodeDropdown items={snippet}/>
  )
}

export default MMI