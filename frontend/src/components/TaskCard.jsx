const TaskCard = ({ task, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-all">
    <h2 className="text-xl font-bold mb-2 text-blue-600">{task.title}</h2>
    
    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Description:</span> {task.description}
    </p>

    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Due Date:</span> {task.due_date}
    </p>

    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Status:</span> {task.status}
    </p>

    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Remarks:</span> {task.remarks}
    </p>

    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Created By:</span> {task.created_by}
    </p>

    <p className="text-gray-700 mb-1">
      <span className="font-semibold">Updated By:</span> {task.updated_by}
    </p>

    <div className="mt-4 flex justify-between">
      <a
        href={`/update-task/${task.id}`}
        className="text-blue-500 hover:text-blue-700"
      >
        Edit
      </a>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  </div>
);

export default TaskCard;
