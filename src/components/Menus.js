import starFill from './../assets/Star_fill.svg';
import star from './../assets/Star.svg';

export const Menus = ({menuData}) => {

    return(
        <div className='food-list-component'>
            {
                (menuData.popular) && <div className='popular'>
                    <span>Popular</span>
                </div>
            }
            <img className='image' src={menuData.image} alt='menu-image' />
            <div className='info'>
                <span>{menuData.name}</span>
                <div className='price'>
                <span>{menuData.price}</span>
                </div>
            </div>
            <div className='votes'>
                <img className='image' src={(menuData?.rating) ? starFill : star} alt='star-icon' />
                {
                (menuData.rating) ? <>
                    <span className='rating'> 
                    {menuData.rating} 
                    </span>
                    <span className='vote'>
                        ( {menuData.votes} votes )
                    </span>
                </>
                : <>
                    <span className='no-ratings'>No Ratings</span>
                </>
                }
                
            </div>
        </div>
    )
}