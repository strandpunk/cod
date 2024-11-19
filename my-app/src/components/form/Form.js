import './Form.css'

function Form() {

    const send = (event) => {
        event.preventDefault();
        console.log('Отправлено')
    }

    return (
        <>
            <div className="Form-wrapper">
                <form onSubmit={send} method="get">
                    <div className='Form-inputWrapper'>

                        <label>Имя </label>
                        <input type="text" name="name" id="name" required />

                        <label>Почта </label>
                        <input type="email" name="email" id="email" required />

                        <label>Дата рождения </label>
                        <input type="date" name="date" id="date" required />

                        <label>Пароль </label>
                        <input type="password" name="password" id="password" required />

                    </div>
                    <div >
                        <button type="submit" id='Form_button'>Купить</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form