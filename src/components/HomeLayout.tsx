import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <div>헤더</div>
      <Outlet />
      <div>푸터</div>
    </>
  );
}
export default HomeLayout;
