const backendAddress = 'http://localhost:8000'

export const fetchCompletion = async (query: string) => {
  return await fetch(`${backendAddress}/translate-with-explanation`, { method: 'POST'})
    .then(async (response) => {
      return await response.json()
    })
}
