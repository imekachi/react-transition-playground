/**
 * Case insensitive search for items in an array
 */
export function searchItems<Items extends string[] | undefined>(
  keyword: string,
  items: Items,
): Items {
  // Eliminate leading and trailing spaces
  const trimmedKeyword = keyword.trim()

  // If the keyword is empty or items is empty, return the original items
  if (!trimmedKeyword || !items?.length) return items

  return items.filter((item) =>
    // convert both the keyword and the item to lowercase to match
    // without case sensitivity
    item.toLowerCase().includes(trimmedKeyword.toLowerCase()),
  ) as Items
}
