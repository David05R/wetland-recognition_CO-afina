import React, { useState } from 'react'

export const ZoneFilter = ({ onFilterChange }) => {
  const [protectedZone, setProtectedZone] = useState(true)
  const [urbanZone, setUrbanZone] = useState(true)
  const [others, setOthers] = useState(true)

  const toggleFilter = (filter) => {
    let newFilters;
    switch (filter) {
      case 'protected':
        setProtectedZone(!protectedZone)
        newFilters = { protectedZone: !protectedZone, urbanZone, others }
        break
      case 'urban':
        setUrbanZone(!urbanZone)
        newFilters = { protectedZone, urbanZone: !urbanZone, others }
        break
      case 'others':
        setOthers(!others)
        newFilters = { protectedZone, urbanZone, others: !others }
        break
    }
    
    // Llamamos a onFilterChange solo si es una función
    if (typeof onFilterChange === 'function') {
      onFilterChange(newFilters)
    }
  }

  const getFilterStyle = (isActive) => {
    return isActive
      ? 'bg-secondary-container text-on-secondary-dark'
      : 'text-on-secondary-dark'
  }

  return (
    <div className='absolute bottom-2 right-2 flex items-center w-fit h-10 font-poppins font-medium bg-background select-none rounded-full z-50'>
      <div 
        className={`${getFilterStyle(protectedZone)} h-8 flex items-center px-6 rounded-full cursor-pointer`}
        onClick={() => toggleFilter('protected')}
      >
        En zonas protegidas
      </div>
      <div 
        className={`${getFilterStyle(urbanZone)} h-8 flex items-center px-6 rounded-full cursor-pointer`}
        onClick={() => toggleFilter('urban')}
      >
        En zonas urbanas
      </div>
      <div 
        className={`${getFilterStyle(others)} h-8 flex items-center px-6 rounded-full cursor-pointer`}
        onClick={() => toggleFilter('others')}
      >
        Otros
      </div>
    </div>
  )
}