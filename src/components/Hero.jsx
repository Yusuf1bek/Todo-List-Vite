import React, { useState } from 'react';
import { toast } from 'react-toastify';
            


function Hero() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState('');
    
    const notify = () => toast.success("Task add");
    const notifyEmpty = () => toast.error("Input is empty");
    const handleAddTask = () => {
        if (task.trim()) {
            notify()
            setTasks([...tasks, task]);
            setTask('');
        }else{
            notifyEmpty()
        }
    };

  const handleDeleteTask = (index) => {
    const notifyDelete = () => toast.wa("Task deleted");
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    notifyDelete()
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleSaveTask = () => {
    const notifySave = () => toast.info("Task saved");
    const newTasks = tasks.map((item, index) => (index === editIndex ? editTask : item));
    setTasks(newTasks);
    setEditIndex(null);
    setEditTask('');
    notifySave()
  };

  return (
    <div className="flex flex-col items-center mt-10  px-[700px]">
        <div className='flex items-center gap-[25px]'>
        <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="outline-none p-2 border rounded-lg text-lg w-72 mr-3 border-gray-300"
        />
        <button
            type='submit'
            onClick={handleAddTask}
            className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500 "
        >
            <span
                className="text-white font-semibold ml-8  transition-all duration-300"
                >Add Task
            </span>
        </button>
        </div>
      <ul className="list-none p-0 w-72 mt-5 space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-[13px] bg-gray-100 rounded-lg shadow-sm text-lg">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  className="p-2 border rounded-lg text-lg border-gray-300 w-full mr-3"
                />
                <button
                  onClick={handleSaveTask}
                  className="w-[150px] p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {task}
                <div>
                  <button
                    onClick={() => handleEditTask(index)}
                    className="w-[70px] p-1 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="w-[70px] p-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hero;
