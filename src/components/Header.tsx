import headerImage from '../assets/header_horizontal.png';
import headerMascot from '../assets/astronaut.png';


export function Header() {
  return (
    <div className='flex justify-center direction-row'>
      <picture>
        <source media="(min-width: 641px)" srcSet={headerImage} />
        <img src={headerImage} alt="header" className="mx-auto rounded-md max-w-100 sm:max-w-180 lg:max-w-160" />
      </picture>
      <img src={headerMascot} alt="mascot" className="mt-30 max-w-50 w-full h-full object-contain hidden md:block lg:block" />

    </div>
  )
}