

const MyForm = () => {
  return (
    <div>
      <h1>This is the form!</h1>
      <form className="my-form-container">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" />

          <label htmlFor="lastname">Lastname</label>
          <input type="text" />

          <label htmlFor="email">Email</label>
          <input type="email" />

          <button class="btn-form" type="submit">
            Send!
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
