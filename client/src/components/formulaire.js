import { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  {
    id: 1,
    name: 'Luis Rivera',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Antonio Rivera',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Jose Rivera',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Mario Rivera',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Luigi Rivera',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Lucas Rivera',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Ruby Rivera',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Bambi Rivera',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Lizzy Rivera',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Steph Rivera',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const locations = [
  {
    id: 1,
    name: 'New York',
    avatar:
      'NY',
  },
  {
    id: 2,
    name: 'Colorado',
    avatar:
      'CO',
  },
  {
    id: 3,
    name: 'San Antonio',
    avatar:
      'TX',
  },
  {
    id: 4,
    name: 'Houston',
    avatar:
      'TX',
  },
  {
    id: 5,
    name: 'Galveston',
    avatar:
      'TX',
  },
  {
    id: 6,
    name: 'Miami',
    avatar:
      'FL',
  }
]

const budget = [
  {
    id: 1,
    name: '0-100',
    avatar:
      'USD',
  },
  {
    id: 2,
    name: '0-250',
    avatar:
      'USD',
  },
  {
    id: 3,
    name: '0-500',
    avatar:
      'USD',
  },
  {
    id: 4,
    name: '0-1,000',
    avatar:
      'USD',
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Formulaire() {
  const [selected, setSelected] = useState(people[3]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedBudget, setSelectedBudget] = useState(budget[0]);



  useEffect(() => {

    console.log(selected.name, selectedLocation.name, selectedBudget.name);
    
  }, [selected, selectedLocation, selectedBudget])

  return (
    <>

    {/* People */}
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 mb-1 relative w-8/12">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>

    {/* Locations */}
    <Listbox value={selectedLocation} onChange={setSelectedLocation}>
{({ open }) => (
  <>
    <div className="mt-1 mb-1 relative w-8/12">
      <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span className="flex items-center">
          <p className="flex-shrink-0 h-6 w-6 rounded-full">{selectedLocation.avatar}</p>
          <span className="ml-3 block truncate">{selectedLocation.name}</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>

      <Transition
        show={open}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {locations.map((locations) => (
            <Listbox.Option
              key={locations.id}
              className={({ active }) =>
                classNames(
                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-3 pr-9'
                )
              }
              value={locations}
            >
              {({ selectedLocation, active }) => (
                <>
                  <div className="flex items-center">
                    <p className="flex-shrink-0 h-6 w-6 rounded-full">{locations.avatar}</p>
                    <span
                      className={classNames(selectedLocation ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                    >
                      {locations.name}
                    </span>
                  </div>

                  {selectedLocation ? (
                    <span
                      className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </>
)}
    </Listbox>

    {/* Budget */}
    <Listbox value={selectedBudget} onChange={setSelectedBudget}>
{({ open }) => (
  <>
    <div className="mt-1 mb-40 relative w-8/12">
      <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span className="flex items-center">
          <p className="flex-shrink-0 h-6 w-6 rounded-full">{selectedBudget.avatar}</p>
          <span className="ml-3 block truncate">{selectedBudget.name}</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>

      <Transition
        show={open}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-36 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {budget.map((budget) => (
            <Listbox.Option
              key={budget.id}
              className={({ active }) =>
                classNames(
                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-3 pr-9'
                )
              }
              value={budget}
            >
              {({ selectedBudget, active }) => (
                <>
                  <div className="flex items-center">
                    <p className="flex-shrink-0 h-6 w-6 rounded-full">{budget.avatar}</p>
                    <span
                      className={classNames(selectedBudget ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                    >
                      {budget.name}
                    </span>
                  </div>

                  {selectedBudget ? (
                    <span
                      className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                      )}
                    >
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </>
)}
    </Listbox>

</>
  )
}