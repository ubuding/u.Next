/** @type {import('next').NextConfig} */
// import path from 'path';
// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// };

// export default nextConfig;
const path = require('path');
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
