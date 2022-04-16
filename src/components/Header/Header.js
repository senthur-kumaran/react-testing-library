import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <h1 data-testid="header-1" title="Header" className="header">{title}</h1>
}
