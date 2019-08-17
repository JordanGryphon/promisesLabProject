let inputEl = document.getElementById("nameFilter");
let userPage = document.getElementById("userPage");
userPage.style.display = "none";

let searchUsers = () => {
  const value = inputEl.value;
  $.get(`http://jsonplaceholder.typicode.com/users?username=${value}`, user => {
    if (user.length) {
      userPage.style.display = "block";
      document.getElementById("errorMessage").innerHTML = '';
      document.getElementById("userName").innerHTML = user[0].name;
      $.get(`http://jsonplaceholder.typicode.com/users/${user[0].id}/posts`, posts => {
        posts.forEach(post => {
          let postEl = document.createElement('li');
          postEl.innerHTML = post.title;
          document.getElementById("userPosts").appendChild(postEl)
        });
      })
      $.get(`http://jsonplaceholder.typicode.com/users/${user[0].id}/albums`, albums => {
        albums.forEach(album => {
          let albumEl = document.createElement('li');
          albumEl.innerHTML = album.title;
          document.getElementById("userAlbums").appendChild(albumEl)
        });
      })
    } else {
      userPage.style.display = "none";
      document.getElementById("errorMessage").innerHTML = 'User Not Found';
    }
  })
}

// Who Did What:
//
// - We all got to a certain point and got stuck together, and Megan was able to figure out what changes were needed to be made in our javascript to get our code to work.
