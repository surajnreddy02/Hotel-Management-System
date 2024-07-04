import React from 'react'

function Rating() {
    return (
        <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        </div>
    )
}

export default Rating
