import { Outlet, useNavigation } from "react-router-dom";
import MainHeaderNavigation from "../components/MainHeaderNavigation";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainHeaderNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
