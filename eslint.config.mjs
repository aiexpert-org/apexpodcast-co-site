import next from 'eslint-config-next'

const eslintConfig = [
  ...(Array.isArray(next) ? next : [next]),
  {
    ignores: ['.next/**', 'node_modules/**', 'app/_fonts/**'],
  },
]

export default eslintConfig
