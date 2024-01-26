// Skip Husky install in production and CI
import husky from 'husky';

if (process.env.NODE_ENV === 'production' || process.env.CI === '1') {
    process.exit(0);
}

console.log(husky());
