import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact us!!</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Abc' />
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder='abcs@gmail.com' />
            </div>
            <div>
                <label>Location</label>
                <input type="text" placeholder='Enter location' />
            </div>

            <button type="submit">Submit</button>
        </form>
        </main>
    </div>
  )
}

export default Contact