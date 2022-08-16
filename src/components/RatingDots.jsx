import './css/rating-dots.scss';

export const RatingDots = function ({rate}) {
    const dots = Array.from(Array(10).keys())

    return (
        <div cy="rating-dots" className="rating-dots">
            {
                dots.map((value, index) => (
                    <span className={index < +rate ? 'rated' : ''} 
                    key={value} />
                ))
            }
        </div>
    )
}
