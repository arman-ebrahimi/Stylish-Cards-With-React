import React from "react";

export const colors = {
    firstCard: {background: '#FA8072FF', color: '#ffffff'},
    secondCard: {background: '#87CEFA', color: '#008080FF'}
}

export const ColorContext = React.createContext(
    colors.firstCard
)
