import React, { useState } from "react";

function EmailForm() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [success, setSuccess] = useState(false);

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    // No backend -> Simulate success
    setSuccess(true);

    // Clear input fields
    setFormData({ title: "", body: "" });

    // Hide success message after 3 sec
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Email Form</h2>

        <label className="font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={changeHandler}
          required
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <label className="font-medium">Body</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={changeHandler}
          required
          rows="5"
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>

        {success && (
          <p className="text-green-600 font-semibold mt-4 text-center">
            ✔ Data submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default EmailForm;
