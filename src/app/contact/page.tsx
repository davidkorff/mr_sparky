import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get in touch with us for all your electrical needs. We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 