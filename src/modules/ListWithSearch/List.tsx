export type ListProps = {
  items?: string[]
}

export function List(props: ListProps) {
  const { items } = props

  return (
    <ul className="space-y-2">
      {items?.length ? (
        items.map((item, i) => {
          return (
            <li key={i} className="p-2 rounded hover:bg-slate-100">
              {item}
            </li>
          )
        })
      ) : (
        <li className="text-center p-2 text-gray-400">No item in the list</li>
      )}
    </ul>
  )
}
