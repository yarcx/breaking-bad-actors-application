import React, {useState} from 'react'

export default function Search({query}) {
    const [search, setSearch] = useState('')

  const handleChange = (q) => {
    setSearch(q)
    query(q)
    }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
    

    return (
      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
            <p className="search-word">Search For A Character</p>
            <input type="text" value={search} required autoFocus className="search-input"  onChange={(e) => handleChange(e.target.value)}/>
        </form>
      </div>
    );
}
