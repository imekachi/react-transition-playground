import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Button } from '@/lib/components/Button'
import { Input } from '@/lib/components/Input'

export type ItemCreationFormProps = {
  onSubmit?: (value: string) => void
}

export function ItemCreationForm(props: ItemCreationFormProps) {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleValueChange}
        placeholder="Add something to the list..."
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
