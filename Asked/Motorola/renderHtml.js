function solution() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(function(arr) {
      const posts = arr.slice(0, 2)
      let innerDiv = ''

      for(post of posts) {
      	innerDiv += `<div class="title">${post.title}</div>`
      }

      return `
       <div class="example">
         ${innerDiv}
       </div>
      `
    })
}

solution().then(function(html) {
  document.body.innerHTML = html
})
