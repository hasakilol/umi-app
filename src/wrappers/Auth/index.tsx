import { Outlet } from 'umi';

export default (props) => {
  console.log('auth', props);
  return <Outlet />;
};
