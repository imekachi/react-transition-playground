import { Input } from '@/lib/components/Input'
import { List, ListProps } from '@/modules/ListWithSearch/List'

export type ListWithSearchProps = Pick<ListProps, 'items'> & {
  title?: string
}

export function ListWithSearch(props: ListWithSearchProps): JSX.Element {
  const { title, items } = props

  return (
    <div className="border border-slate-300 rounded p-4">
      {title && <h2 className="mb-4 font-bold text-lg">{title}</h2>}
      <Input type="text" placeholder="Search..." className="mb-4" />
      <List items={items} />
    </div>
  )
}
