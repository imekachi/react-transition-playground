import { useMemo, useState } from 'react'
import { debounce } from '@/lib/utils/debounce'
import { ListWithSearch, ListWithSearchProps } from '@/modules/ListWithSearch'
import { searchItems } from '@/modules/searchItems'

export type ListWithDebounceSearchProps = Omit<
  ListWithSearchProps,
  'onSearchChange'
>

export function ListWithDebounceSearch(props: ListWithDebounceSearchProps) {
  const { title, items } = props

  const [keyword, setKeyword] = useState('')

  const filteredItems = searchItems(keyword, items)

  // Wait 1s for the incoming keyword to settle down before updating the keyword state
  // which would trigger a re-render that would update the filteredItems.
  const debouncedSetKeyword = useMemo(() => debounce(setKeyword, 1000), [])

  return (
    <ListWithSearch
      title={title}
      items={filteredItems}
      onSearchChange={debouncedSetKeyword}
    />
  )
}
