import DefaultLayout from '@/layouts/DefaultLayout';
import { Outlet } from '@umijs/max';

export default () => {
  return (
    <div>
      Layout <Outlet />
    </div>
  );
};

export { DefaultLayout };
