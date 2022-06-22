import { FC } from 'react'

import { useQueryTasks } from '../hooks/useQueryTasks'
import Spiner from './Spiner'
import TaskItem from './TaskItem'

const TaskList: FC = () => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') return <Spiner />
  if (status === 'error') return <p>Error</p>
  return (
    <ul className="my-2">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  )
}

export default TaskList
