export default {
  port: process.env.PORT || 50000,
  services: {
    authService: {
      url: '127.0.0.1:50001',
    },
    orderService: {
      url: '127.0.0.1:50009',
    },
  },
  apiKey: {
    algorithmEncrypt: process.env.ALGORITHM_ENCRYPT || 'aes-256-cbc',
  },
};
