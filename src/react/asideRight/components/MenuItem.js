import React from 'react'

const MenuItem = ({
    display, toggleDisplay,
    heading, renderContent,
}) => {

    const caret = <i
        className={`fa fa-caret-${display ? 'up' : 'down'}`}
        aria-hidden="true"
    ></i>

    return <>
        <div
            className="aside-header btn"
            onClick={toggleDisplay}
        >
            {caret} {heading}
        </div>
        { display && renderContent() }
    </>
}

export default MenuItem