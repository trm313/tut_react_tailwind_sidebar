import NavBar from "./NavBar";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div
      className={`
      h-screen w-screen overflow-hidden
      flex flex-col-reverse lg:flex-row
      lg:overflow-y-auto
      `}
    >
      <NavBar />
      <div className='flex flex-col overflow-y-auto'>
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
