import React from 'react'
import SuggestionProfile from './SuggestionProfile'

const Suggestions = () => {
  return (
    <div className='pl-3'>
        <div className='flex justify-between mt-4'>
            <p className='text-gray-400'>Suggestion for you</p>
            <p>See All</p>
        </div>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
    </div>
  )
}

export default Suggestions