module.exports =
  process.env.NODE_ENV === 'development' &&
  require('@cypress/code-coverage/middleware/nextjs')
