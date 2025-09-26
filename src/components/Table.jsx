import { useState } from 'react';
import './Table.css';
import { ArrowDown, ArrowUp } from 'lucide-react';
export function Table() {
    const data = [
        {
            id: "m5gr84i9",
            amount: 316,
            status: "success",
            email: "ken99@example.com",
        },
        {
            id: "3u1reuv4",
            amount: 242,
            status: "success",
            email: "Abe45@example.com",
        },
        {
            id: "derv1ws0",
            amount: 837,
            status: "processing",
            email: "Monserrat44@example.com",
        },
        {
            id: "5kma53ae",
            amount: 874,
            status: "success",
            email: "Silas22@example.com",
        },
        {
            id: "bhqecj4p",
            amount: 721,
            status: "failed",
            email: "carmella@example.com",
        },
    ]

    console.log('rendered')
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState(data.sort((a, b) => a.id.localeCompare(b.id)));
    const [isAscending, setIsAscending] = useState(true);
    const [sortAttribute, setSortAttribute] = useState('id');

    function handleSearch(e) {
        let searchValue = e.target.value;
        setSearchTerm(searchValue);
        let query = searchValue.trim();
        let newData = data.filter(row => row.email.toLowerCase().startsWith(query.toLowerCase()))
        setFilteredData(newData)
    }

    function handleSort(sortBy) {
        let newData = [...filteredData];
        if (sortBy == 'id') {
            if (sortAttribute == 'id') {
                changeSortOrder();
                return;
            }
            newData.sort((a, b) => a.id.localeCompare(b.id))
        }
        else if (sortBy == 'amount') {
            if (sortAttribute == 'amount') {
                changeSortOrder();
                return;
            }
            newData.sort((a, b) => parseInt(a.amount) - parseInt(b.amount))
            setSortAttribute('amount')
        }
        else if (sortBy == 'status') {
            if (sortAttribute == 'status'){
                changeSortOrder();
                return;
            }
            newData.sort((a, b) => a.status.localeCompare(b.status))
            setSortAttribute('status')
        }
        else if (sortBy == 'email') {
            if (sortAttribute == 'email'){
                changeSortOrder();
                return;
            }
            newData.sort((a, b) => a.email.localeCompare(b.email));
            setSortAttribute('email')
        }
        setFilteredData(newData)
    }

    function changeSortOrder() {
        let newData = [...filteredData];
        newData.reverse();
        setFilteredData(newData);
        setIsAscending(prev => !prev)
    }


    return (
        <div className='table-container'>
            <input className='search-box' placeholder='Search email..' value={searchTerm} onChange={handleSearch} />
            <table>
                <tr>
                    <th>
                        <span onClick={() => handleSort('id')}>ID</span>
                        {sortAttribute == 'id' && (isAscending? <ArrowDown size={15}/>: <ArrowUp size={15}/>)}
                    </th>
                    <th>
                        <span onClick={() => handleSort('amount')}>Amount</span>
                        {sortAttribute == 'amount' && (isAscending? <ArrowDown size={15}/>: <ArrowUp size={15}/>)}
                    </th>
                    <th>
                        <span onClick={() => handleSort('status')}>Status</span>
                        {sortAttribute == 'status' && (isAscending? <ArrowDown size={15}/>: <ArrowUp size={15}/>)}
                    </th>
                    <th>
                        <span onClick={() => handleSort('email')}>Email</span>
                        {sortAttribute == 'email' && (isAscending? <ArrowDown size={15}/>: <ArrowUp size={15}/>)}
                    </th>
                </tr>
                {filteredData.map((row, index) => (
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.amount}</td>
                        <td>{row.status}</td>
                        <td>{row.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}