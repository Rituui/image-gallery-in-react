import { useState } from 'react';
import './App.css';

const options = [
  {
    id: "1",
    name: "First",
    images: [
      "https://i.pinimg.com/236x/6f/a0/fc/6fa0fc1c2eb36e931dc9ea1439caef85.jpg",
      "https://i.pinimg.com/236x/64/8c/3d/648c3da0f62c070772b4ad8b8dbc87bf.jpg",
      "https://i.pinimg.com/236x/18/05/c8/1805c8b93fdb8de6e53dad60131d6dab.jpg",
      "https://i.pinimg.com/236x/91/88/71/918871c28fde262db1291e405f099970.jpg",
      "https://i.pinimg.com/236x/e9/d0/4a/e9d04a9338457bebf7eb5631bdfa3f2c.jpg",
      "https://i.pinimg.com/236x/f8/bc/bd/f8bcbdf5073d36c430f45bdcb124b205.jpg",
      "https://i.pinimg.com/236x/64/8c/3d/648c3da0f62c070772b4ad8b8dbc87bf.jpg",
      "https://i.pinimg.com/236x/18/05/c8/1805c8b93fdb8de6e53dad60131d6dab.jpg",

    ]
  },
  {
    id: "2",
    name: "Second",
    images: [
      'https://i.pinimg.com/236x/03/8a/01/038a0143f1ce26de1626b33e6bb5a69c.jpg',
      'https://i.pinimg.com/236x/91/47/23/914723cbf4d319f2e17f638a0de562f6.jpg',
      'https://i.pinimg.com/564x/41/d6/77/41d677ffb3441dae375d4a57767ff83e.jpg',
      'https://i.pinimg.com/236x/0a/d7/7f/0ad77febe4d34cedb6e25332d41fdb2a.jpg',
      'https://i.pinimg.com/236x/6f/09/22/6f09220e8d19bf83b1cc5e846476f77e.jpg',
      'https://i.pinimg.com/236x/f4/2d/76/f42d764f92d1b9890bf3659308e43443.jpg',
      'https://i.pinimg.com/236x/03/8a/01/038a0143f1ce26de1626b33e6bb5a69c.jpg',
      'https://i.pinimg.com/236x/91/47/23/914723cbf4d319f2e17f638a0de562f6.jpg',
    ]
  },
  {
    id: "3",
    name: "Third",
    images: [
      'https://i.pinimg.com/236x/32/8e/26/328e26f83b540df3208218756b6f3774.jpg',
      'https://i.pinimg.com/236x/ae/b7/30/aeb730f4efb9de31fbf58c2846f7ae9a.jpg',
      'https://i.pinimg.com/236x/93/ae/6d/93ae6ddbea5093f5c9ba65d03a2244a2.jpg',
      'https://i.pinimg.com/236x/50/10/73/50107379d270cbcbd997fafe6a53173a.jpg',
      'https://i.pinimg.com/236x/40/cd/b3/40cdb30b9cb2ae3ea051da4935307300.jpg',
      'https://i.pinimg.com/236x/50/16/38/5016382226db88c0aeb20c2cc8bb7f03.jpg',
      'https://i.pinimg.com/236x/32/8e/26/328e26f83b540df3208218756b6f3774.jpg',
      'https://i.pinimg.com/236x/ae/b7/30/aeb730f4efb9de31fbf58c2846f7ae9a.jpg',
    ]
  }
  ,
  {
    id: "4",
    name: "Fourth",
    images: [
      'https://i.pinimg.com/236x/5e/98/7a/5e987a932348036c8bf85d0b0fe9f632.jpg',
      'https://i.pinimg.com/236x/27/4e/ef/274eeff56d51428f4665143181819825.jpg',
      'https://i.pinimg.com/236x/8e/4d/6c/8e4d6c58c162f2fcf1bb1f1367856bf1.jpg',
      'https://i.pinimg.com/236x/66/ca/68/66ca68c162dcd2338f893241c0d44c3e.jpg',
      'https://i.pinimg.com/236x/cd/66/ac/cd66aca8b44d45f9716614aa93a31362.jpg',
      'https://i.pinimg.com/236x/e0/68/a7/e068a756e003586336efb8bf6bb359cd.jpg',
      'https://i.pinimg.com/236x/5e/98/7a/5e987a932348036c8bf85d0b0fe9f632.jpg',
      'https://i.pinimg.com/236x/27/4e/ef/274eeff56d51428f4665143181819825.jpg',
    ]
  }
]

function App() {

  const [selectedOption , setSelectedOption] = useState(options[0]);
  return (
    <div className='image-gallery'>
      <div className='options-menu'>
        {
          options.map((option) => {
            return (
              <li onClick={() => setSelectedOption(option)}>{option.name}</li>
            )
          })
        }
      </div>
      <div className='image-grid'>
        {
          selectedOption.images.map((image) => {
            return (
              <div className='image-grid-item'>
                <img src={image}></img>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
