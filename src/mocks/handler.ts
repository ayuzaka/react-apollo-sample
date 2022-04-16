import { graphql } from 'msw';

export const handlers = [
  graphql.query('userInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          id: 'xhajgkflrejgoiro',
          name: 'John',
        },
      })
    );
  }),
];
