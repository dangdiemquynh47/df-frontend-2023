import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { XMarkIcon } from "@heroicons/react/24/outline"

const Demo = () => {
  const [textName, setName] = useState("");
  const [textAuthor, setAuthor] = useState("");
  const [textTopic, setTopic] = useState("");
  const [keyword, setKeyword] = useState('')

    interface Book {
        name : string,
        author : string,
        topic: string,
        id:number
    }

    interface ListBook extends Array<Book>{}

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  }
  const onChangeTopic = (e) => {
    setTopic(e.target.value);
  }

    const [list, setList] = useState<ListBook>([{
      name: "Refactoring",
      author: "Martin Fowler",
      topic: "	Programming",
      id:1,
    },
    {
      name: "Refactoring2",
      author: "Martin Fowler",
      topic: "	Programming",
      id:2,
    },
    {
      name: "Refactoring3",
      author: "Martin Fowler",
      topic: "	Programming",
      id:3,
    },
    {
      name: "Refactoring4",
      author: "Martin Fowler",
      topic: "	Programming",
      id:4,
    },
    {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:5,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:6,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:7,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:8,
    }, {
      name: "Refactoring2",
      author: "Martin Fowler",
      topic: "	Programming",
      id:9,
    },
    {
      name: "Refactoring3",
      author: "Martin Fowler",
      topic: "	Programming",
      id:10,
    },
    {
      name: "Refactoring4",
      author: "Martin Fowler",
      topic: "	Programming",
      id:11,
    },
    {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:12,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:13,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:14,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:15,
    },
    {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:16,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:17,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:18,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:19,
    },
    {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:20,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:21,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:22,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:23,
    }, {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:24,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:25,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:26,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:27,
    }, {
      name: "Refactoring5",
      author: "Martin Fowler",
      topic: "	Programming",
      id:28,
    },
    {
      name: "Refactoring6",
      author: "Martin Fowler",
      topic: "	Programming",
      id:29,
    },
    {
      name: "Refactoring7",
      author: "Martin Fowler",
      topic: "	Programming",
      id:30,
    },
    {
      name: "Refactoring8",
      author: "Martin Fowler",
      topic: "	Programming",
      id:31,
    }
    ]);
  const deleteTask = (id) => {
    console.log(id);
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  };  
  const [active, setActive] = useState(false);

  const saveObj = () => {
    const obj = {
      name: textName,
      author: textAuthor,
      topic: textTopic,
      id: uuidv4()
    }
    list.push(obj)
    setList([...list])
    setName("")
    setAuthor("")
    setTopic("")
  }

  const closeModal = () => {
    setActive(!active)
  }

  const closeAndSave = () => {
    saveObj()
    closeModal()
  }

  const [page, setPage] = useState(0)
  const setActivePage = (index) => {
    setPage(index)
  }
  const itemPerPage = 3
  
  const listAfterSearch = list.filter((item:Book) => item.name.includes(keyword))
  const renderList = listAfterSearch.slice((page) * itemPerPage, (page + 1) * itemPerPage)
  const totalpage = listAfterSearch.length % itemPerPage === 0 ? Math.floor(listAfterSearch.length / itemPerPage) : Math.floor(listAfterSearch.length / itemPerPage) + 1

  const getPositionPagination = (page) => {
    if (totalpage < 2) return { start: 0, end: 0, numberMiddle: [] }
    const distance = 2
    const start = Math.max(1, page - distance);
    const end = Math.min(totalpage - 2, page + 2)
    const numberMiddle = Array(end - start + 1).fill(null)
    return { start, end, numberMiddle }
  }

  const { start, end, numberMiddle } = getPositionPagination(page)
  const [modalDelete, setModalDelete] = useState(false)
  const [idEdit, setIdEdit] = useState(0)
  const onClickDelete = (index) => {
    setIdEdit(index)
    setModalDelete(!modalDelete)
  }

  const deleteAndSave = (index:number) => {
    deleteTask(index)
    onClickDelete(index)
  }

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
    setPage(0)
    console.log("quynh");
  }

  return (
    <div className="">
      <div className="flex items-center gap-3 bg-white py-4 px-10">
        <p className="font-bold text-2xl">BookStore</p>
        <img
          src="https://nguoinoitieng.tv/images/nnt/98/0/bc38.jpg"
          alt=""
          className="w-8 h-8 ml-auto rounded-full"
        />
        <p>John Doe</p>
      </div>
      <div className="h-[1px] w-full bg-neutral-400 shadow-md"></div>
      <div className="bg-neutral-100 px-5">
        <div className="flex items-center pt-10 mb-6">
          <input
            type="search"
            placeholder="Search"
            className="ml-auto px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm  mr-3"
            onChange={onChangeKeyword}
          />
          <button className="text-white bg-red-400 px-3 py-1  " onClick={() => setActive(!active)}>
            Add book
          </button>

        </div>
        <div className={"modal w-full h-full" + (active === true ? "" : " hidden")}>
          <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen ">
            <div className="absolute z-0 bg-black/50 top-0 left-0 w-screen h-screen" onClick={closeModal}></div>
            <div className="w-[400px] relative z-10  p-10 bg-white rounded-xl">
              <div className="flex items-center h-10 mb-10">
                <p className=" font-bold text-3xl">Add book</p>
                <XMarkIcon className="w-6 h-6 ml-auto cursor-pointer" onClick={closeModal} />
              </div>
              <div className="mb-10 w-full">
                <p>Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Name"
                  value={textName}
                  onChange={onChangeName}
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm w-full"
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
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm w-full"
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
                  className="px-3 py-1 border-[1px] border-solid border-neutral-300 rounded-sm w-full"
                />
              </div>
              <div className="flex">
                <button className="bg-red-400 text-white px-3 py-1 rounded-sm ml-auto" onClick={closeAndSave}>
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
              {renderList.map((item) => {
                return (
                  <tr>

                    <td className="border border-slate-300">{item.name}</td>
                    <td className="border border-slate-300">{item.author}</td>
                    <td className="border border-slate-300">{item.topic}</td>
                    <td className="border border-slate-300  underline text-red-600" >
                      <p className="cursor-pointer" onClick={() => onClickDelete(item.id)}>Delete</p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className={modalDelete === true ? "" : "hidden"}>
          <div className="modal w-screen">
            <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen ">
              <div className="absolute z-0 bg-black/50 top-0 left-0 w-screen h-screen" onClick={onClickDelete}></div>
              <div className="w-fit relative z-10  p-10 bg-white rounded-xl">
                <div className="flex items-center h-fit pb-10">
                  <p className=" font-bold text-3xl">Delete book</p>
                  <XMarkIcon className="w-6 h-6 cursor-pointer ml-auto" onClick={onClickDelete} />
                </div>

                <p>Do you want to delete <span className="font-bold">{renderList.find(item => item.id === idEdit)?.name}</span> book ?</p>
                <div className="flex">
                  <button onClick={() => deleteAndSave(idEdit)}
                    className="bg-red-300 text-white px-6 py-3 rounded-lg ml-auto mt-6">Delete</button>
                  <button onClick={onClickDelete} className="bg-red-700 text-white px-6 py-3 rounded-lg ml-2 mt-6">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {totalpage >= 2 && <div className="flex gap-10 items-center justify-center">

          <div className="cursor-pointer">
            <p className={page === 0 ? "bg-red-400 px-3 py-1 rounded-md " : ""} onClick={() => setActivePage(0)}>{1}</p>
          </div>

          {start - 0 > 1 && <div className="">
            <p className={""}  >...</p>
          </div>}
          {numberMiddle.map((_, i) => {
            const index = i + start;
            return (
              <div className="cursor-pointer">
                <p className={page === index ? "bg-red-400 px-3 py-1 rounded-md  " : ""} onClick={() => setActivePage(index)}>{index + 1}</p>
              </div>
            )
          })}
          {totalpage - 1 - end > 1 && <div className="">
            <p className={""}  >...</p>
          </div>}
          <div className="cursor-pointer">
            <p className={page === totalpage - 1 ? "bg-red-400 px-3 py-1 rounded-md " : ""} onClick={() => setActivePage(totalpage - 1)}>{totalpage}</p>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Demo;