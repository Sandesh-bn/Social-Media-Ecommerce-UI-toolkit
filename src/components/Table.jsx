import { useState } from 'react';
import './Table.css';
import { ArrowDown } from 'lucide-react';
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

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState(data.sort((a, b) => a.id.localeCompare(b.id)));
    const [isAscending, setIsAscending] = useState(true);
    const [sortBy, setSortBy] = useState('id');

    function handleSearch(e){
        let searchValue = e.target.value;
        setSearchTerm(searchValue);
        let query = searchValue.trim();
        let newData = data.filter(row => row.email.toLowerCase().startsWith(query.toLowerCase()))
        setFilteredData(newData)
    }

    function handleSort(sortBy){
        
    }
    return (
        <div className='table-container'>
            <input className='search-box' placeholder='Search email..' value={searchTerm} onChange={handleSearch}/>
            <table>
                <tr>
                    <th>ID <ArrowDown size={15}/></th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Email</th>
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