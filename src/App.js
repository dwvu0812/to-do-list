import React, {useState} from 'react'

// const gifts = [
//   'CPU i9',
//   'RAM 32GB',
//   'RGB Keyboard'
// ]

// const courses = [
//   {id: 1, 
//   name: 'HTML, CSS'},
//   {id: 2, 
//   name: 'JavaScript'},
//   {id: 3, 
//   name: 'ReactJS'},
// ]

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs ?? []
  })
  const handleDelete = (id) => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const newJobs = storageJobs.filter((item, index) => index !== id)

    setJobs(newJobs)

    localStorage.setItem('jobs', JSON.stringify(newJobs))
  }
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      console.log(jsonJobs)

      return newJobs
    })
    setJob('')
  }
  return (
    <div style={{padding: 32}}>
      <input value={job} onChange={e => setJob(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => {
          return <React.Fragment key={index}>
                  <li >{job}</li>
                  <button onClick={() => handleDelete(index)}>Delete</button>

                  </React.Fragment>
        })}
      </ul>
    </div>
  )
}

export default App;
