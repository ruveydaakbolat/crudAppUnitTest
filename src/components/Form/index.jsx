const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    addUser(newUser);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="ör:Kerem"
        />
      </div>

      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="ör:kerem@gmail.com"
        />
      </div>

      <div className="my-4">
        <label htmlFor="age">Yaş</label>
        <input
          id="age"
          type="number"
          name="age"
          className="form-control"
          placeholder="ör:20"
        />
      </div>

      <button>Kullanıcı Ekle</button>
    </form>
  );
};

export default Form;
