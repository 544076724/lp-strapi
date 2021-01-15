module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1fe6d8ae4b6dd6e223dc0f0f76eea3a8'),
    },
  },
});
