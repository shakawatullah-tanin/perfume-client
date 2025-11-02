import React from 'react';

const Form = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()

        const form= e.target
        const formData = new FormData(form)
        console.log(formData)
    const newPerfumes = Object.fromEntries(formData.entries())
    console.log(newPerfumes)

    }
    return (
       <form className='grid form grid-cols-1 my-4 max-w-100 mx-auto ' onSubmit={handleSubmit}>
            <input type="text"  name='name' placeholder='Name of Perfume' />
            <input type="text"  name='Category' placeholder='Category'/>
            <input type="text" name='description' placeholder='description'/>
            <input type="text" name='fragrance ' placeholder='Fragrance' />
            <input type="number" name='size'/>
            <button className='border my-4 p-2'>Send Database</button>
       </form>
    );
};

export default Form;