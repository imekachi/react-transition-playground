import { useState, useTransition } from 'react'
import { ListWithSearch, ListWithSearchProps } from '@/modules/ListWithSearch'
import { searchItems } from '@/modules/searchItems'

export type ListWithTransitionSearchProps = Omit<
  ListWithSearchProps,
  'onSearchChange'
>

export function ListWithTransitionSearch(props: ListWithTransitionSearchProps) {
  const { title, items } = props

  const [keyword, setKeyword] = useState('')
  const [, startTransition] = useTransition()

  const filteredItems = searchItems(keyword, items)

  const handleSearchChange = (value: string) => {
    startTransition(() => {
      setKeyword(value)
    })
  }

  return (
    <ListWithSearch
      title={title}
      items={filteredItems}
      onSearchChange={handleSearchChange}
    />
  )
}
