import Header from "@/components/Header";
import React from 'react'; // Ensure React is in scope when using JSX

const Account = () => {
  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">

        </div>
      </Header>
    </div>
  );
}

export default Account;
