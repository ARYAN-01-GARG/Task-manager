'use client';

import Card from "@/app/components/Card";

export default function Dashboard() {

  return (
    <div className="flex flex-col px-8 py-10 gap-10">
      <div className="">
        <h2 className="text-purple-600 text-4xl font-semibold ">Tasks <span className="text-black">Dashboard</span></h2>
        <h3 className="text-purple-600 text-2xl font-semibold ml-2 mt-2">Welcome back</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-10 ">
        <div className="bg-purple-600 shadow-xl shadow-purple-400 w-80 h-60 rounded-[4rem]">
          <Card title="Total Tasks" count={5}/>
        </div>
        <div className="bg-rose-400 shadow-xl shadow-rose-300 w-80 h-60 rounded-[4rem]">
          <Card title="In Progess" count={1}/>
        </div>
        <div className="bg-yellow-400 shadow-xl shadow-yellow-300 w-80 h-60 rounded-[4rem]">
          <Card title="Pending" count={3}/>
        </div>
        <div className="bg-blue-500 shadow-xl shadow-blue-400 w-80 h-60 rounded-[4rem]">
          <Card title="Important" count={1}/>
        </div>
      </div>
    </div>
  );
}