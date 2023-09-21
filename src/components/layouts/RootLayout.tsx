import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main>
      <header>Afterburner</header>
      <div>
        <Outlet key="main-outlet" />
      </div>
    </main>
  );
};

export default RootLayout;
