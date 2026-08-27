
export default function BookingForm({ selectedMovie, setTickets }) {  
    if (!selectedMovie) {

        return (
            <section className="booking">

                <h2>🎟️ Booking</h2>

                <p>
                    Please select a movie first.
                </p>

            </section>
        );
    }


    return (

        <section className="booking">

            <h2>🎟️ Booking Form</h2>

            <h3>
                {selectedMovie.title}
            </h3>

            <p>
                Price per ticket:
                ₦{selectedMovie.price}
            </p>


            <label>
                Number of Tickets
            </label>

            <input
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) =>
                    setTickets(
                        Number(e.target.value)
                    )
                }
            />

        </section>
    );

  }