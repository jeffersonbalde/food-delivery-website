import { CiForkAndKnife } from "react-icons/ci"

function FilterProduct({category, onClick}) {
  return (
    <div onClick={onClick}>
        <div className="text-3xl text-white p-5 bg-slate-500 rounded-full cursor-pointer">
            <CiForkAndKnife />
        </div>
        <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  )
}

export default FilterProduct