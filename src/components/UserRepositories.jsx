// import React from 'react'
import fork from '/Nesting.svg'
import star from '/Star.svg'
import PropTypes from 'prop-types'
import MIT from '/Chield_alt.svg'
const UserRepositories = ({ repos }) => {
    return (
        <div className="grid md:grid-cols-2 gap-4 ml-32 mr-32 max-md:grid-cols-1">
            {/* eslint-disable-next-line react/prop-types */}
            {repos ? (repos.map((repo, idx) => {
                return (
                    <>
                    <a href={repo?.clone_url} target='_blank' rel="noreferrer" key={idx} className=''> 
                        <div className="repositoryOne p-4 bg-gradient-to-tr from-[#111729] to-[#1D1B48] flex flex-col gap-3 rounded-xl" >
                            <h1 className="repoName text-[#CDD5E0]">{repo?.name}</h1>
                            <p className='text-[#CDD5E0]'>{repo?.description}</p>
                            <div className="icons flex gap-5 flex-wrap">
                                {repo.license &&
                                    <div className="MITtag flex">
                                        <img src={MIT} alt="fork" className="w-6 h-6 mr-1" />
                                        <p className="text-[#CDD5E0] mr-1">{repo?.license.name}</p>
                                    </div>}
                                <div className="forkCategory flex">
                                    <img src={fork} alt="fork" className="w-6 h-6 mr-1" />
                                    <p className="text-[#CDD5E0] mr-1">{repo?.forks_count}</p>
                                </div>
                                <div className="StarCategory flex">
                                    <img src={star} alt="fork" className="w-6 h-6 mr-1" />
                                    <p className="text-[#CDD5E0] mr-2">{repo?.stargazers_count}</p>
                                </div>
                                <div className="DateCategory flex">
                                    <p className="text-[#CDD5E0] mr-1">Updated at {repo?.updated_at.slice(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </>
                )
            })):"No repository Found"}
        </div>
    )
}

export default UserRepositories

UserRepositories.propTypes = {
    repos: PropTypes.array.isRequired
}


{/* <div className="repositoryOne p-4 bg-gradient-to-tr from-[#111729] to-[#1D1B48] flex flex-col gap-3 rounded-xl">
<h1 className="repoName text-[#CDD5E0]">Github</h1>
<p className='text-[#CDD5E0]'>Lorem ipsum dolor sit amet.</p>
<div className="icons flex gap-5">
    <div className="forkCategory flex">
        <img src={fork} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
    <img src={star} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
        <p className="text-[#CDD5E0]">Updated 4 days ago</p>
    </div>
</div>
</div>
<div className="repositoryTwo p-4 bg-gradient-to-tr from-[#111729] to-[#1D1B48] flex flex-col gap-3 rounded-xl">
<h1 className="repoName text-[#CDD5E0]">Github</h1>
<p className='text-[#CDD5E0]'>Lorem ipsum dolor sit amet.</p>
<div className="icons flex gap-5">
    <div className="forkCategory flex">
        <img src={fork} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
    <img src={star} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
        <p className="text-[#CDD5E0]">Updated 4 days ago</p>
    </div>
</div>
</div>
<div className="repositoryThree p-4 bg-gradient-to-tr from-[#111729] to-[#1D1B48] flex flex-col gap-3 rounded-xl">
<h1 className="repoName text-[#CDD5E0]">Github</h1>
<p className='text-[#CDD5E0]'>Lorem ipsum dolor sit amet.</p>
<div className="icons flex gap-5">
    <div className="forkCategory flex">
        <img src={fork} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
    <img src={star} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
        <p className="text-[#CDD5E0]">Updated 4 days ago</p>
    </div>
</div>
</div>
<div className="repositoryFour p-4 bg-gradient-to-tr from-[#111729] to-[#1D1B48] flex flex-col gap-3 rounded-xl">
<h1 className="repoName text-[#CDD5E0]">Github</h1>
<p className='text-[#CDD5E0]'>Lorem ipsum dolor sit amet.</p>
<div className="icons flex gap-5">
    <div className="forkCategory flex">
        <img src={fork} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
    <img src={star} alt="fork" className="w-6 h-6" />
        <p className="text-[#CDD5E0]">2,657</p>
    </div>
    <div className="StarCategory flex">
        <p className="text-[#CDD5E0]">Updated 4 days ago</p>
    </div>
</div>
</div> */}