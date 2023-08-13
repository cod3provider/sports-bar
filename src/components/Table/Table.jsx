import './Table.module.scss'

const Table = () => {
    return (
        <>

            <table className=''>
                <thead>
                    <tr>
                        <th>Opening hours:</th>
                    </tr>
                    <tr>
                        <th>Mon - Thu</th>
                        <td>16:00 - 00:00</td>

                    </tr>
                    <tr>
                        <th>Fri</th>
                        <td>16:00 until the last client</td>
                    </tr>
                    <tr>
                        <th>Sat - Sun</th>
                        <td>10:00 until</td>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Table;