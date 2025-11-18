export default () => ({
  rest: {
    config: {
      defaultLimit: 25,
      maxLimit: 100,
      withCount: true,
    },
  },
  'users-permissions': {
    config: {
      roles: {
        public: {
          description: 'Default role for all visitors',
          permissions: {
            'api::blog-post.blog-post': {
              actions: ['find', 'findOne'],
            },
            'api::category.category': {
              actions: ['find', 'findOne'],
            },
            'api::tag.tag': {
              actions: ['find', 'findOne'],
            },
          },
        },
      },
    },
  },
});
