import { useState } from "react";

const Demo = () => {
  const [textName, setName] = useState("");
  const [textAuthor, setAuthor] = useState("");
  const [textTopic, setTopic] = useState("");

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

  const [list, setList] = useState([{
    name: "quynh",
    author: "cute",
    topic: "phomaique"
  }]);
  const deleteTask = (index) => {
    list.splice(index, 1)
    setList([...list])
  };
  const [active, setActive] = useState(false);
  console.log(active);
  const saveObj = () => {
    const obj = {
      name: textName,
      author: textAuthor,
      topic: textTopic
    }
    list.push(obj)
    setList([...list])
    setName("")
    setAuthor("")
    setTopic("")
    console.log(list)
  }

  const closeModal = () => {
    setActive(!active)
  }
  return (
    <div className="">
      <div className="flex items-center gap-3 bg-white py-4 px-10">
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
        <div className="flex items-center pt-10 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm  mr-3"
          />
          <button className="text-white bg-red-400 px-3 py-1 ml-auto " onClick={() => setActive(!active)}>
            Add book
          </button>

        </div>
          <div className={"modal w-full h-full" + (active === true ? "" : " hidden")}>
            <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen ">
              <div className="absolute z-0 bg-black/50 top-0 left-0 w-screen h-screen" onClick={closeModal}></div>
              <div className="w-fit relative z-10  p-10 bg-white rounded-xl">
                <div className="flex items-center h-10">
                  <p className="pb-10 font-bold text-3xl">Add book</p>
                  <i className="fa-solid fa-xmark ml-auto" onClick={closeModal}></i>
                </div>
                <div className="mb-10">
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
                <div className="mb-10">
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
                </div>
                <div className="mb-10">
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
                <div class="flex">
                <button className="bg-red-400 text-white px-3 py-1 rounded-sm ml-auto" onClick={saveObj}>
            Create
          </button>

                </div>
              </div>
            </div>
          </div>
        <div className=" px-20">
          <table className="border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="border border-slate-300 w-5/12">Name</th>
                <th className="border border-slate-300 w-3/12">Author</th>
                <th className="border border-slate-300 w-2/12">Topic</th>
                <th className="border border-slate-300 w-2/12">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                return (
                  <tr>
                    <td className="border border-slate-300">{item.name}</td>
                    <td className="border border-slate-300">{item.author}</td>
                    <td className="border border-slate-300">{item.topic}</td>
                    <td className="border border-slate-300 cursor-pointer underline text-red-600" onClick={() => deleteTask(index)}>Delete</td>
                  </tr>
                )
              })}



            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Demo;
