'use client';

import { task } from "@prisma/client"
import axios from "axios"
import { useState } from "react"

function page() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(Date.now())
  const [priority, setPriority] = useState('')

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const task:task= await axios.post('/api/tasks', {
        title,
        description,
        due_date: dueDate,
        priority
      })
    } catch (error) {
      console.error(error)
    }

  }


  return (
    <div>
      <h1>New Task</h1>
      <form>
        <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="date" placeholder="Due Date" required/>
        <select name="priority" onChange={handlePriorityChange}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
          <option value="URGENT">Urgent</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Create Task</button>
      </form>
    </div>
  )
}

export default page