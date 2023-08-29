import { Button } from '@/lib/components/Button'
import { Input } from '@/lib/components/Input'
import { ListWithSearch } from '@/modules/ListWithSearch'

const INITIAL_LIST: string[] = Array.from({ length: 5 }).map(
  (_, i) => `Item ${i + 1}`,
)

function App() {
  return (
    <div className="mx-auto max-w-screen-lg p-10">
      <div className="mx-auto max-w-screen-sm">
        <form className="flex gap-2">
          <Input type="text" placeholder="Add something to the list..." />
          <Button type="submit">Add</Button>
        </form>
      </div>

      <div className="mt-6 md:grid md:grid-cols-2 md:gap-4">
        <ListWithSearch title="With Debounce" items={INITIAL_LIST} />
        <ListWithSearch title="With transition" items={INITIAL_LIST} />
      </div>
    </div>
  )
}

export default App
