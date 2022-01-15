import PropTypes from 'prop-types'

import { BugTableHeader, BugTableRow } from './BugTableRow'

const BugList = ({ bugs }) => {
    return (
        <div className='bug-list-container'>
            <ul className='bug-list'>
                <BugTableHeader />
                {bugs.map((bug) => {
                    return <BugTableRow key={bug.id} bug={bug} />
                })}
            </ul>
        </div>
    )
}

BugList.propTypes = {
    bugs: PropTypes.array,
}

export default BugList
