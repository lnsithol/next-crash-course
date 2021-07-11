const dev = "process.env.NODE_ENV ! == 'porduction'"

export const server = dev ? 'http://localhost:3000' : 'http://yourweside.com'