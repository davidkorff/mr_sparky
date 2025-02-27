import Link from 'next/link'

const values = [
  {
    name: 'Quality',
    description: 'We never compromise on quality. Our work is performed to the highest standards using premium materials and equipment.',
  },
  {
    name: 'Safety',
    description: 'Safety is our top priority. We follow all electrical codes and safety protocols to protect our clients and their property.',
  },
  {
    name: 'Reliability',
    description: 'You can count on us to show up on time and complete the work as promised. We stand behind our workmanship.',
  },
  {
    name: 'Customer Service',
    description: 'We believe in clear communication and exceptional service. Our team is here to answer your questions and address your concerns.',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Miller Lights</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Miller Lights has been providing professional electrical services to residential and commercial clients
              for over a decade. Our commitment to quality, safety, and customer satisfaction has made us a trusted
              name in the electrical industry.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Miller Lights, our values guide everything we do. They shape our work ethic and define our
            commitment to excellence.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                {value.name}
              </dt>
              <dd className="inline">{' ' + value.description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
} 