import { useSelector } from 'react-redux'
import './App.css'
import Search from './components/Search'
import UserProfile from './components/UserProfile'

function App() {
  const searchUser = useSelector((state)=> state.github.searchUser)

  return (
    <>
     <div className="flex flex-col h-screen">
      <div className={`searchDetails flex flex-col justify-center items-center  ${!searchUser && 'mb-24'}`}>
        <Search/>
        </div>
        {console.log(searchUser)}
        <UserProfile username={`${!searchUser && "Github"}`}/>
      </div>
    </>
  )
}

export default App
