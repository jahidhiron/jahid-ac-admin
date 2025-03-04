import React, { useState } from "react";
import { TextInput, Textarea, Button, Card, Accordion } from "@mantine/core";
import { toast } from "react-toastify";

const HelpSupportPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    toast.success("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className='p-6 mx-auto '>
      {/* Introduction */}
      <h1 className='text-3xl font-bold mb-4'>Help & Support</h1>
      <p className='text-gray-700 mb-6'>
        Need assistance? Check out our FAQ section or contact us using the form
        below.
      </p>

      {/* FAQ Section */}
      <Accordion variant='contained' className='mb-6'>
        <Accordion.Item value='q1'>
          <Accordion.Control>How do I reset my password?</Accordion.Control>
          <Accordion.Panel>
            You can reset your password by clicking "Forgot Password" on the
            login page.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value='q2'>
          <Accordion.Control>How do I contact support?</Accordion.Control>
          <Accordion.Panel>
            You can contact us via email or phone. Details are provided below.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value='q3'>
          <Accordion.Control>Can I update my email address?</Accordion.Control>
          <Accordion.Panel>
            Yes, you can update your email in the account settings.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Card padding='lg' radius='md' withBorder className='w-6/12'>
        <h2 className='text-xl font-semibold mb-4'>Contact Support</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <TextInput
            label='Name'
            placeholder='Your Name'
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <TextInput
            label='Email'
            placeholder='Your Email'
            type='email'
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
          <Textarea
            label='Message'
            placeholder='How can we help you?'
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
          />

          <button
            type='submit'
            className='flex px-10 disabled:bg-white disabled:text-primary disabled:border disabled:border-primary items-center mt-6 bg-primary text-white p-1 rounded'
          >
            Send Message
          </button>
        </form>
      </Card>

      {/* Contact Information */}
      <div className='mt-6'>
        <h2 className='text-xl font-semibold'>Other Contact Methods</h2>
        <p>
          Email:{" "}
          <a href='mailto:support@example.com' className='text-blue-600'>
            support@example.com
          </a>
        </p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Support Lane, Help City, HC 56789</p>
      </div>
    </div>
  );
};

export default HelpSupportPage;
