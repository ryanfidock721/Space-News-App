import gitImage from '../assets/github.png';
import linkedIn from '../assets/linkedin.png';

export function Footer () {
    return (
        <div className='pt-50 pb-30'>
            <div className='flex justify-center direction-column items-center'>
                <footer className='pr-3'>Made by Ryan Fidock</footer>
                <a href='https://github.com/ryanfidock721'>
                    <img src={gitImage} alt="github" className="p-1 hover:bg-gray-700 rounded-md max-w-12 sm:max-w-12 lg:max-w-12" />
                </a>
                <a href='https://www.linkedin.com/in/ryan-fidock-2aa470167/'>
                    <img src={linkedIn} alt="github" className="p-1 hover:bg-gray-700 rounded-md max-w-12 sm:max-w-12 lg:max-w-12" />
                </a>
            </div>
        </div>
    )
}