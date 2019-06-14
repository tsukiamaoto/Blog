
const fetchAllPosts = () => {
  const url = '/post'
  const response = fetch( url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  return response
}

export const postApi = {
  fetchAllPosts,
  fetchPosts(postId){

  }
}