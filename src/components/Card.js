import React from "react"
import ListItem from "./ListItem"
import LinkButton from "./LinkButton"

const Card = ({ profile }) => {

    const blackList = [
        'website',
        'description'
    ]

    const renderCard = result => {
        var listItems = []
        for (let [key, value] of Object.entries(result)) {
            if(!blackList.includes(key)) {
                listItems = [
                    ...listItems,
                    (
                        <ListItem
                            key={key}
                            label={key}
                            value={value}
                        />
                    )
                ]
            }
        }
        return listItems
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <LinkButton href={ profile.website }>
                        { profile.companyName }
                    </LinkButton>
                </h5>
                <p className="card-text">
                    { profile.description }
                </p>
            </div>
            <ul className="list-group list-group-flush">
                { renderCard(profile) }
            </ul>
        </div>
    )
}

export default Card
