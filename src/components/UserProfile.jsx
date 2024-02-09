
import { useDispatch, useSelector } from 'react-redux'
import UserRepositories from './UserRepositories'
// import photo from '/9919.png'
import { useEffect } from 'react'
import { fetchGitHubUser } from '../redux/features/Data.action'
// import { decrement, increment } from '../redux/features/counterSlice'
import PropTypes from 'prop-types'
import { setNumReposToShow } from '../redux/features/Data.slice'


const UserProfile = ({ username }) => {
    const dispatch = useDispatch()

    const { user, loading, error, repos, numReposToShow } = useSelector((state) => state.github);

    useEffect(() => {
        dispatch(fetchGitHubUser(username));

    }, [dispatch, username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleViewRepos = () => {
        dispatch(setNumReposToShow(repos.length))
    }
    const handleHideRepos = () =>{
        dispatch(setNumReposToShow(4))
    }

    return (
        <div>
            <div className="userInfo flex  gap-12 lg:ml-32 max-lg:ml-10 md:ml-32 sm:ml-28">
                <div className="info">
                    <img src={user?.avatar_url} alt="userImage" className="w-24 h-24  border-[#364153] border-[5px] rounded-xl" />
                </div>
                <div className="userDetails flex gap-8 mt-12 md:flex-col lg:flex-row max-sm:flex-col sm:flex-col">
                    <div className="followers flex  bg-[#111729] px-4 py-4 rounded-xl justify-center items-center">
                        <h4 className='text-[#4A5567] px-2'>Followers</h4>
                        <div className="vertical-line w-0.5 h-6 bg-[#4A5567] mx-2"></div>
                        <p className='text-[#CDD5E0] px-2'>{user?.followers}</p>
                    </div>
                    <div className="following flex  bg-[#111729] px-4 py-4 rounded-xl">
                        <h4 className='text-[rgb(74,85,103)] px-2'>Following</h4>
                        <div className="vertical-line w-0.5 h-6 bg-[#4A5567] mx-2"></div>
                        <p className='text-[#CDD5E0] px-2'>{user?.following}</p>
                    </div>
                    <div className="Location flex  bg-[#111729] px-4 py-4 rounded-xl">
                        <h4 className='text-[rgb(74,85,103)] px-2'>Location</h4>
                        <div className="vertical-line w-0.5 h-6 bg-[#4A5567] mx-2"></div>
                        <p className='text-[#CDD5E0] px-2'>{user?.location}</p>
                    </div>
                </div>
            </div>
            <div className="bio mt-6 ml-32 mb-5">
                <h1 className='text-3xl text-[#CDD5E0]'>{user?.name}</h1>
                <p className='text-[#CDD5E0] mt-2'>{user?.bio}</p>
            </div>
            <UserRepositories repos={repos.slice(0, numReposToShow)} />
            {repos.length > numReposToShow ? (
                <>
                <div className="MoreRepos  text-center mt-10 mb-10">
                    <button className='text-[#CDD5E0]' onClick={handleViewRepos}>View all repositories</button>
                </div>
                </>
                ):(
                    <div className="MoreRepos  text-center mt-10 mb-10">
                    <button className='text-[#CDD5E0]' onClick={handleHideRepos}>Show less</button>
                </div>
                )
            }
        </div>
    )
}

export default UserProfile

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
};