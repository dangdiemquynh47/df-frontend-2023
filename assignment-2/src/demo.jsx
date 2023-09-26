import { useState } from 'react'

const Demo = () => {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
  }
  const [list, setList] = useState(['Task 1'])
  const createTask = () => {
    setList([...list,text])
    setText('')
  }

  const deleteTask = (index) => {
    const newList = ([...list])
    newList.splice(index, 1)
    setList(newList)
  }

  const [edit, setEdit] = useState(-1)

  const onUpdate = () => {
    const newList = [...list]
    newList[edit] = text
    setList(newList)
    setEdit(-1)
    setText('')
  }

  const onEdit = (index) =>{
    setText(list[index])
    setEdit(index)
  }

  const cancelUpdate = () => {
    setText('')
    setEdit(-1)
  }

  console.log(text)
  return (
    <div className="p-10">
      <div className="">
        <input type="text" value={text} onChange={onChange} placeholder="nhap task name" />
        <button  onClick={edit !== -1 ? onUpdate : createTask}>{edit !== -1 ? "update" : "add task"}</button>
        {edit !== -1 && <button onClick={() => cancelUpdate()}>cancel update</button>}
      </div>
      {list.map((item, index) => {
        return (
            <div className="">
                <div className="">{item}</div>
                <button onClick={() => onEdit(index)}>gekki</button>
                <button onClick={() => deleteTask(index)} >delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default Demo
