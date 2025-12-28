export const useBlog = () => {
  const fetchPosts = (limitCount?: number) => {
    let query = queryCollection('blog')
      .where('draft', '<>', true)
      .order('date', 'DESC')

    if (limitCount) {
      query = query.limit(limitCount)
    }

    return query.all()
  }

  return { fetchPosts }
}
