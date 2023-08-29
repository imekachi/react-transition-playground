import { ChangeEventHandler } from 'react'
import { Input } from '@/lib/components/Input'
import { List, ListProps } from '@/modules/ListWithSearch/List'

export type ListWithSearchProps = Pick<ListProps, 'items'> & {
  title?: string
  onSearchChange?: (value: string) => void
}

export function ListWithSearch(props: ListWithSearchProps) {
  const { title, items, onSearchChange } = props

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onSearchChange?.(event.target.value)
  }

  return (
    <div className="border border-slate-300 rounded p-4">
      {title && <h2 className="mb-4 font-bold text-lg">{title}</h2>}
      <Input
        type="text"
        placeholder="Search..."
        className="mb-4"
        onChange={handleSearchChange}
      />
      <List items={items} />
    </div>
  )
}
