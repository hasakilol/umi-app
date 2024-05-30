// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

export async function getInitialState(): Promise<{
  name: string;
  canAccessHome: boolean;
  canAccessTable: boolean;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'ye',
        canAccessHome: window.location.host === 'localhost:8000' && true,
        canAccessTable: true,
      });
    }, 1000);
  });
}

// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//   };
// };

// export const layout: RunTimeLayoutConfig = () => {
//   return {
//     // 自定义 403 页面
//     unAccessible: <div>unAccessible</div>,
//     // 自定义 404 页面
//     noFound: <div>noFound</div>,
//     // jjj
//     // headerRender: () => <div>header render</div>,
//     // menuHeaderRender: false,
//     layout: 'mix',
//     // rightContentRender: false,
//     // actionsRender: () => [<Button>Account</Button>],
//     logout: () => {},
//   };
// };
