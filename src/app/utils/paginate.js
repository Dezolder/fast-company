export const paginate = (items, pageNumber, pageSize) => {
    return [...items].splice((pageNumber - 1) * pageSize, pageSize)
    // почему такая форма записи: [...items] ????????
}
