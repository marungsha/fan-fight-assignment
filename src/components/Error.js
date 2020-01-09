import React from 'react'

export default function ({errorMessage}) {
    return (
        <p className="text-center pa4 bg-moon-gray navy">{errorMessage?errorMessage:'Error loading data!'}</p>
    )
}