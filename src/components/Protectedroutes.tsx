const Protectedroutes = () => {
  const isAuth:boolean=true;
  return (
    <div>
      if (isAuth) {
        return <Outlet />;
      } else {
        return <Navigate to="/login" />;
      }
      </div >

  );
};

export default Protectedroutes;
