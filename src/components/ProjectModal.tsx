import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

type ProjectDetails = {
  title: string
  category: string
  image: string
  description: string
  fullDescription?: string
  features?: string[]
  specifications?: Record<string, string>
}

type Props = {
  isOpen: boolean
  onClose: () => void
  project: ProjectDetails
}

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary-950/70 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all sm:my-12 sm:w-full sm:max-w-3xl">
                {/* Close */}
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={onClose}
                    className="grid place-items-center w-9 h-9 rounded-full bg-white/80 backdrop-blur text-primary-600 hover:text-primary-900 hover:bg-white shadow"
                    aria-label="Close"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Image */}
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <Dialog.Title className="font-display text-2xl sm:text-3xl font-bold text-primary-900">
                    {project.title}
                  </Dialog.Title>
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-700 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-primary-600">
                    {project.fullDescription || project.description}
                  </p>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-primary-900">Key Features</h4>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-primary-700">
                            <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Specifications */}
                  {project.specifications && Object.keys(project.specifications).length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-primary-900">Project Specifications</h4>
                      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {Object.entries(project.specifications).map(([key, value]) => (
                          <div key={key} className="rounded-xl bg-primary-50 p-4">
                            <dt className="text-xs text-primary-500 uppercase tracking-wider">{key}</dt>
                            <dd className="mt-1 text-sm font-semibold text-primary-900">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  <div className="mt-10">
                    <a href="#contact" onClick={onClose} className="btn btn-accent btn-lg">
                      Discuss a similar project
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
