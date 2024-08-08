"use client";
function Contact() {
  return (
    <div>
      <form className=" ml-12 w-96">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title:</label>
          <input type="text" className="input border border-sky-800" />
        </div>
        <div className="flex flex-col gap-1 mt-9">
          <label htmlFor="Author">Author:</label>
          <input
            type="text"
            className="border input
           border-sky-800"
          />
        </div>
        <button className="btn mt-7">submit</button>
      </form>
    </div>
  );
}

export default Contact;
