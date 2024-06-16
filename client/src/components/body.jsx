import React from "react";

const HomeBody = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mt-9">
        <div className="flex justify-center items-center ">
          <div className="relative flex flex-col w-96 group">
            <div className="relative w-full h-80 transition-transform transform group-hover:scale-105">
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stcGYtcG9tLTEyNDIuanBn.jpg"
                alt="profile-picture"
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="absolute bottom-0 text-start py-6 font-bold text-indigo-700 px-4 text-6xl">
                Hotel Machester
              </p>
            </div>
          </div>
        </div>

        {/* card ending */}
      </div>
    </section>
  );
};

export default HomeBody;