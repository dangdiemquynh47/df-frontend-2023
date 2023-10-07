import { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  const [textName, setName] = useState("");
  const [textAuthor, setAuthor] = useState("");
  const [textTopic, setTopic] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);

  };
  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  }
  const onChangeTopic = (e) => {
    setTopic(e.target.value);
  }

  const [list, setList] = useState(["Task 1"]);
  const createTask = () => {
    setList([...list, text]);
    setText("");
  };

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const [edit, setEdit] = useState(-1);

  const onUpdate = () => {
    const newList = [...list];
    newList[edit] = text;
    setList(newList);
    setEdit(-1);
    setText("");
  };

  const onEdit = (index) => {
    setText(list[index]);
    setEdit(index);
  };

  const cancelUpdate = () => {
    setText("");
    setEdit(-1);
  };
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className="pt-10">
      <div className="">
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="nhap task name"
        />
        <button onClick={edit !== -1 ? onUpdate : createTask}>
          {edit !== -1 ? "update" : "add task"}
        </button>
        {edit !== -1 && (
          <button onClick={() => cancelUpdate()}>cancel update</button>
        )}
      </div>
      {list.map((item, index) => {
        return (
          <div className="">
            <div className="">{item}</div>
            <button onClick={() => onEdit(index)}>gekki</button>
            <button onClick={() => deleteTask(index)}>delete</button>
          </div>
        );
      })}

      <div className="p-10">
        <div className="flex items-center gap-3 bg-white py-4">
          <p>BookStore</p>
          <img
            src="https://nguoinoitieng.tv/images/nnt/98/0/bc38.jpg"
            alt=""
            className="w-8 h-8 ml-auto rounded-full"
          />
          <p>Mina Myoui</p>
        </div>
        <div className="h-[1px] w-full bg-neutral-400 shadow-md"></div>
        <div className="bg-neutral-100 px-5">
          <div className="flex items-center pt-10 ">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm"
            />
            <button className="text-white bg-red-500 px-3 py-1 rounded-sm ml-auto" onClick={()=>setActive(!active)}>
              Add book
            </button>
            
          </div>
          <div className={" border-[1px] border-solid border-neutral-400 w-[40%] mx-auto rounded-sm p-10 " + (active === true ? "" : "hidden")}>
            <div className="flex items-center">
              <p>Add Book</p>
              <i className="fa-solid fa-xmark w-10 h-10 stroke-neutral-700 fill-neutral-600"></i>
            </div>
            <div className="pt-10">
              <div className="">
                <p>Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Name"
                  value={textName}
                  onChange={onChangeName}
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm"
                />
              </div>
              <div className="">
                <p>Author</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Author"
                  value={textAuthor}
                  onChange={onChangeAuthor}
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm"
                />
              </div>{" "}
              <div className="">
                <p>Topic</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Topic"
                  value={textTopic}
                  onChange={onChangeTopic}
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm"
                />
              </div>
            </div>
            <button className="bg-red-400 text-white px-3 py-1 rounded-sm ml-auto">
              Create
            </button>
          </div>
          <div class=" px-20">
            <table class="border-collapse border border-slate-400 w-full">
              <thead>
                <tr>
                  <th class="border border-slate-300 w-5/12">Name</th>
                  <th class="border border-slate-300 w-3/12">Author</th>
                  <th class="border border-slate-300 w-2/12">Topic</th>
                  <th class="border border-slate-300 w-2/12">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300">Refactoring</td>
                  <td class="border border-slate-300"> Martin Fowler</td>
                  <td class="border border-slate-300">Programming</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="border border-slate-300">
                    Designing Data-Intensive Applications
                  </td>
                  <td class="border border-slate-300">Martin Kleppmann</td>
                  <td class="border border-slate-300">Database</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="border border-slate-300">The Phoenix Project</td>
                  <td class="border border-slate-300">Gene Kim</td>
                  <td class="border border-slate-300">DevOps</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
