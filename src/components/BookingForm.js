import React from 'react'

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [Occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
       <header>
            <section>
                <from onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
                            type='date' required/>
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select if="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                    {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                        </div>

                        <div>
                        <label htmlFor='book-occasion'>Occasion</label>
                        <select id='book-occasion' key={Occasion} value={Occasion} onChange={e => setOccasion (e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>

                        <div>
                            <div className='btnReceive'>

                            </div>
                        </div>
                    </fieldset>
                </from>
            </section>
       </header>
  )
}

export default BookingForm