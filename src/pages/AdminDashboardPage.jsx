import React from "react";
import BiUser from "react-icons/bi";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        {/* Header */}
        <div className="w-full px-20 py-2 flex justify-between ">
          {/* Logo */}
          <div className="font-bold text-white text-4xl">APP</div>
          {/* Button */}
          <div className="inline-block bg-main text-logout px-10 py-2 rounded-md">
            <BiUser />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
