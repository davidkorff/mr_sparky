import Link from 'next/link'

const services = [
  {
    name: 'Residential Services',
    description: 'Complete electrical solutions for your home, from repairs to new installations.',
    features: [
      'Electrical repairs and maintenance',
      'Lighting installation and upgrades',
      'Circuit breaker panel upgrades',
      'Outlet installation and repair',
      'Ceiling fan installation',
      'Home safety inspections',
    ],
  },
  {
    name: 'Commercial Services',
    description: 'Professional electrical services for businesses and commercial properties.',
    features: [
      'Commercial lighting systems',
      'Electrical system maintenance',
      'Power distribution systems',
      'Emergency lighting installation',
      'Energy efficiency solutions',
      'Code compliance updates',
    ],
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency electrical services for both residential and commercial clients.',
    features: [
      'Available 24/7',
      'Rapid response times',
      'Emergency repairs',
      'Power outage solutions',
      'Circuit breaker issues',
      'Safety inspections',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Electrical Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive electrical services for both residential and commercial properties.
            Our team of licensed electricians ensures quality and safety in every project.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">{service.name}</h3>
                <p className="mt-3 text-base leading-7 text-gray-600">{service.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contact Us for a Quote
          </Link>
        </div>
      </div>
    </div>
  )
} 