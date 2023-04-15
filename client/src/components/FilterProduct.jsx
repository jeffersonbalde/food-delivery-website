import { CiForkAndKnife } from "react-icons/ci"

function FilterProduct({category, onClick, isActive}) {
  return (
    <div onClick={onClick}>
        <div className={`text-3xl p-5 text-white rounded-full cursor-pointer ${isActive ? "bg-slate-600 text-white" : "bg-slate-500"}`}>
            <CiForkAndKnife />
        </div>
        <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  )
}

export default FilterProduct