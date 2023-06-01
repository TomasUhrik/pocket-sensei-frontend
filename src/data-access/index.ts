const backendAddress = 'http://localhost:8000'
// const backendAddress = 'https://pocket-translator-388411.an.r.appspot.com/'

export const fetchCompletion = async (query: string): Promise<{ text: string }> => {
  return await fetch(`${backendAddress}/translate-with-explanation`, 
  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({query: query}), // body data type must match "Content-Type" header
  }) 
    .then(async (response) => {
      return await response.json()
    })
}

export const fetchCompletionJp = async (query: string): Promise<{ text: string }> => {
  return await fetch(`${backendAddress}/translate-with-explanation-jp`, 
  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({query: query}), // body data type must match "Content-Type" header
  }) 
    .then(async (response) => {
      return await response.json()
    })
}
