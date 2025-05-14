// interface FormData {
//   name: string;
//   cell_phone: string;
//   email: string;
//   city: string;
//   state: string;
// }

export default function FormContact() {
    return (
        <>
            <form method="post">
                <label htmlFor="nameComplete">Name</label>
                <input type="text" id="nameComplete" name="nameComplete" placeholder="Firstname Lastname"/>

                <label htmlFor="cellphone">Cellphone</label>
                <input type="text" id="cellphone" name="cellphone" placeholder="54999999999"/>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="example@email.com"/>

                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="City"/>

                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="State"/>

                <button type="submit">Send</button>
            </form>
        </>
    )
}
