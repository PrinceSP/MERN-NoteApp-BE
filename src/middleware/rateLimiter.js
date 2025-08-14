import rateLimit from "../config/upstash.js"

export default async function rateLimiter(req, res, next) {
  try {
    const { success } = await rateLimit.limit(req.ip)
    if (!success) return res.status(429).json({ message: "Too many requests, please try again after 15 minutes." })
    next()
  } catch (error) {
    next(error)
  }
}

