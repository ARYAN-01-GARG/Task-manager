'use client';

export default function page() {

  return (
    <div className="flex flex-col px-8 py-10 gap-10">
      <div className="">
        <h2 className="text-purple-600 text-4xl font-semibold ">All Existing <span className="text-black">Tasks</span></h2>
        <h3 className="text-purple-600 text-2xl ml-2 mt-2">ADMIN PAGE</h3>
      </div>
      <div className="text-2xl font-semibold">
        <label htmlFor="search">Search Tasks : </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search task here..."
          className="border-2 border-purple-950 rounded-lg px-4 py-2 text-lg"
        />
      </div>
      <ul>
        {/* {tasks?.map((task) => (
            <li key={task.task_id}>
              <h4>
                {task.title}
              </h4>
              <p>
                {task.description}
              </p>
            </li>
          ))
        } */}
      </ul>
    </div>
  )
}
