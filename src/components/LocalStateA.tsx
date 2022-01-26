import { ChangeEvent, FormEvent, useState, VFC } from 'react'
import Link from 'next/link'
import { useReactiveVar } from '@apollo/client'

import { todoVar } from '../../cache'

export const LocalStateA: VFC = () => {
  const [input, setInput] = useState('')
  const todos = useReactiveVar(todoVar)

  const handleSubmint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todoVar([...todoVar(), { title: input }])
    setInput('')
  }

  return (
    <>
      <p className='mb-3 font-bold'>makeVar</p>
      {todos?.map((todo, index) => (
        <p key={index} className='mb-3 y-1'>
          {todo.title}
        </p>
      ))}
      <form
        onSubmit={handleSubmint}
        className='flex flex-col justify-center items-center'
      >
        <input
          className='mb-3 px-3 py-2 border border-gray-300'
          placeholder='New task ?'
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        >
        </input>
        <button
          disabled={!input}
          className='disabled:opacity-40 mb-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl forcus:outline-none'
          type='submit'
        >
          Add new state
        </button>
      </form>
      <Link href="/local-state-b">
        <a>Next</a>
      </Link>
    </>
  )
}
