export default function Contact() {
    return (
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold">Contact</h1>
        <p className="lead">Feel free to reach out via the form below.</p>
        <form className="d-flex flex-column align-items-center">
          <input type="text" placeholder="Name" className="form-control w-50 mb-3" />
          <input type="email" placeholder="Email" className="form-control w-50 mb-3" />
          <textarea placeholder="Message" className="form-control w-50 mb-3"></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
  