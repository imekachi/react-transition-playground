import { useState } from 'react'
import { ItemCreationForm } from '@/modules/ItemCreationForm'
import { ListWithDebounceSearch } from '@/modules/ListWithDebounceSearch'
import { ListWithTransitionSearch } from '@/modules/ListWithTransitionSearch'

// A mock up initial list of items
const INITIAL_LIST: string[] = [
  'Apple',
  'Blueberry',
  'Banana',
  'Cherry',
  'Coconut',
  'Durian',
  'Grape',
  'Lemon',
]

function App() {
  const [items, setItems] = useState<string[]>(INITIAL_LIST)

  const handleCreateItem = (value: string) => {
    setItems((items) => [...items, value])
  }

  return (
    <div className="mx-auto max-w-screen-lg p-10">
      <div className="mx-auto max-w-screen-sm">
        <ItemCreationForm onSubmit={handleCreateItem} />
      </div>

      <div className="mt-6 md:grid md:grid-cols-2 md:gap-4">
        <ListWithDebounceSearch title="With Debounce" items={items} />
        <ListWithTransitionSearch title="With transition" items={items} />
      </div>
    </div>
  )
}

export default App
