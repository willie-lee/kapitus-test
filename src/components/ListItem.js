import React from "react"

const ListItem = ({label, value}) => {

    let backgroundColor

    if(label === 'price' && value) {
        value = '$' + value
    }
    if(label === 'changes' || label === 'changesPercentage') {
        backgroundColor = (value > 0) ? 'bg-success' : 'bg-danger'
        backgroundColor = (value === 0) ? 'bg-transparent' : backgroundColor
    }

    return (
        <li className={`list-group-item ${backgroundColor}`}>
            <div className="row">
                <div className="col-3">
                    {label}
                </div>
                <div className="col-9">
                    {value}
                </div>
            </div>
        </li>
    )
}

export default ListItem