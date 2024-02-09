import { useSelector } from 'react-redux'

const SearchSuggestion = () => {
    const Inputvalue = useSelector((state) => state.github.searchUser)
    const { user } = useSelector((state) => state.github)
    return (
        <>
            {Inputvalue && user &&
                <a href={user?.html_url} target='_blank' rel="noreferrer" >
                    <div className={`relative mb-5 bg-[#111729] w-[34rem] mx-auto h-20 rounded-xl mt-2 `}>
                        <div className="image absolute inset-0 flex justify-start p-2 ">
                            <img src={user?.avatar_url} alt="" className='rounded-xl' />
                            <div className="info">
                                <p className="text-[#CDD5E0] px-4 py-1 text-lg">{user?.name}</p>
                                <p className="text-[#CDD5E0] px-4 py-0 text-sm">{user?.bio}</p>
                            </div>
                        </div>
                    </div>
                </a>}
        </>
    )
}

export default SearchSuggestion