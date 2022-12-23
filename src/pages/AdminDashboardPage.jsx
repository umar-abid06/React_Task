import React from "react";
import { BiUser } from "react-icons/bi";
import Card from "../components/Card";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };

  return (
    <>
      <div className="w-full h-screen bg-black px-24 py-4">
        <div className="w-full  py-2 flex justify-between ">
          <div className="font-bold text-white text-4xl">APP</div>

          <div
            className="flex justify-center items-center bg-main px-8 py-2 rounded-3xl cursor-pointer"
            onClick={handleLogout}
          >
            <div>
              <BiUser />
            </div>
            <div className="text-logout">Logout</div>
          </div>
        </div>
        <div className=" w-full flex justify-between items-center">
          <div className="text-white text-2xl">Today's Leaderboard</div>
          <div className="flex justify-between  px-6 py-2 rounded-3xl bg-grayish">
            <div className="text-white ">24 December 2022</div>
            <div className="bg-main px-4 mx-4 rounded-3xl">
              SUBMISSIONS OPEN
            </div>
            <div className="text-white px-2">12:26</div>
          </div>
        </div>

        {/* Cards */}
        {[0, 0, 0, 0].map((item, idx) => (
          <Card
            num={idx}
            color={"white"}
            text="Rune raises $100,000 for marketing through NFT butterflies sale"
            author={"ninjanft"}
            likes={254}
          />
        ))}
      </div>
    </>
  );
};

export default AdminDashboardPage;
