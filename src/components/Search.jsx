// import React from 'react'
import SearchImg from '/Search.svg'
import { setSearchUser } from '../redux/features/Data.slice'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { useCallback, useEffect } from 'react'
import { fetchGitHubUser } from '../redux/features/Data.action'
import SearchSuggestion from './SearchSuggestion'
const Search = () => {
  const dispatch = useDispatch()

  const searchUser = useSelector((state)=> state.github.searchUser)

  

  const handleInput = (value) => {
    dispatch(setSearchUser(value))
  }
  const fetchGitHub = useCallback(() => {
    dispatch(fetchGitHubUser(!searchUser ? "Github":searchUser))
  },[searchUser,dispatch])


  useEffect(() => {
		const localDebounce = debounce(() => {
			fetchGitHub();
		}, 300);

		if (searchUser.trim() !== '') {
			localDebounce();
		}

		return () => {
			localDebounce.cancel();
		};
	}, [searchUser,fetchGitHub]);
  
  
  
  return (
    <>
    <form className={`SearchInput flex justify-center items-center bg-[#364153] rounded-lg px-2 py-2 w-fit mx-auto mt-10 focus-within:outline-[2px] focus-within:outline-[#3662E3]`}>
        <img src={SearchImg} alt="searchImage" className='px-2 py-1' />
        <input type="text"  id='search' name='search' className='outline-none bg-transparent text-[#CDD5E0] md:w-[31rem] py-2 max-md:w-[20rem]' value={searchUser} placeholder='username'
        onChange={e=>handleInput(e.target.value)}
        autoComplete='off'/>
    </form>
        {searchUser && <SearchSuggestion/>}
    </>
  )
}

export default Search;

Search.propTypes = {
    search: PropTypes.func
}