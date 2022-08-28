import { Outlet } from "react-router-dom";
import { Header } from "../../shared/components/Header";

export const CommomLayout: React.FC = () => {
  return (
    <>
      <Header />

      <div className="w-full flex justify-center">
        <div className="max-w-[54rem] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
