import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative z-50">
      <div className="animate-spin h-16 w-16 border-orange-500 rounded-full border-t-4"></div>
    </div>
  );
};

export default Loading;
