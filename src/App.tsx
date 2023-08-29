import { useState } from 'react'
import { ItemCreationForm } from '@/modules/ItemCreationForm'
import { ListWithSearch } from '@/modules/ListWithSearch'

// A mock up initial list of items
const INITIAL_LIST: string[] = Array.from({ length: 5 }).map(
  (_, i) => `Item ${i + 1}`,
)

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
        <ListWithSearch title="With Debounce" items={items} />
        <ListWithSearch title="With transition" items={items} />
      </div>
    </div>
  )
}

export default App
