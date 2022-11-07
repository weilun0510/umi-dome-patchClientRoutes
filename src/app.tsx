// 动态更新路由
export function patchClientRoutes({ routes }: any) {
  console.log('routes: ', routes);
  routes.unshift({
    path: '/foo',
    element: <div>foo</div>,
  });
}

export default {

};