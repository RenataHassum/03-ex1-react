import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Link to="/">
        <Header />
      </Link>
      <Outlet />
    </>
  );
}
