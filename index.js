import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    const date = new.Date()
    const hours = date.getHour()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = ' #84756F'
    }
    else if (hours >= 12 && hours < 17) {
        timeODay = 'afternoon'
        styles.color = ' #2E0927'
    }
    else {
        timeOfDay = 'night'
        styles.color = 'D90000'
    }

    const styles = {
        color: 'whitesmoke',
        backgroundColor: '#FF21068',
        fontSize: '24'
    }

    return (
        <Fragment>
            <h1 style={styles}>Good {timeOfDay}! </h1>
            < Footer />
        </Fragment>
    )


}

ReactDOM.render(<App />, document.getElementById('root'))