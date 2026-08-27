export default function BookingDetails({ selectedMovie, tickets }) {

    if (!selectedMovie) {
        return null;
    }


    const total =
        selectedMovie.price * tickets;


    return (

        <section className="booking-details">

            <h2>🧾 Booking Details</h2>

            <p>
                Movie:
                <strong>
                    {selectedMovie.title}
                </strong>
            </p>

            <p>
                Price:
                <strong>
                    ₦{selectedMovie.price}
                </strong>
            </p>

            <p>
                Tickets:
                <strong>
                    {tickets}
                </strong>
            </p>

            <h3>
                Total Price: ₦{total}
            </h3>

            <button>
                Confirm Booking
            </button>

        </section>
    );
}