
import './App.css'
import Counter from './Count';
import Batsman from './Batsman';
// import Users from './Users';
// import Friends from './Friends';
// import Posts from './Posts';
// import Albums from './Albums';
import Players from './Players'
import { Suspense } from 'react';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// const fetchFriends = async() =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users')
// return res.json();
// }

// const fetchPosts = async() => {
//   const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

// const fetchAlbums = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/albums');
//   return res.json();
// }

function App() {

  // const friendsPromise = fetchFriends();

  // const postsPromise = fetchPosts();

  // const albumsPromise = fetchAlbums();

  function handleClick () {
    alert('I am clicked!');
  }

  const handleClick3 = () => {
    alert('Click 3');
  }

  const handleAdd5 = (num) => {
    const newNum = num +5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Players></Players>


      {/* <Suspense fallback={<h4>Albums are loading...</h4>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}


      <Batsman></Batsman>

      <Counter></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={function () {
        alert('Click 2');
      }}>Click 2</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => {
        alert('Click 4')
      }}>Click 4</button>

      <button onClick={() => {handleAdd5(10)}}>Add number</button>
    </>
  )
}

export default App
