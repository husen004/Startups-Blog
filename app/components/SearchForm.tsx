import Form from 'next/form';
import SearchFormReset from './SearchFormReset';


const SearchForm = ({ query } : {query?: string}) => {

  return (
    <Form action="/" scroll={false} className='search-form'>
        <input 
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search Startups'
        />

        <div className='flex gap-2'>
            {query && <SearchFormReset />}

            <button className='search-btn text-white' type='submit'>
                S
            </button>
            
        </div>
    </Form>
  )
}

export default SearchForm