import React, {useState} from 'react'
import { faqs } from '../assets/assets.js'
import Title from './Title.jsx'

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedFaqId, setSelectedFaqId] = useState(null)
    function handleopen(id){
        setIsOpen((prev) => !prev)
        setSelectedFaqId(id)
        const faqitem = faqs.find((item) => item.id === id) 
        console.log("FAQ details:", faqitem)
    }
    return(
        <div className='w-full max-w-4xl mx-auto py-10 pt-0'>
            <Title
                heading='Frequently Asked Questions'
                subheading='Find answers to common questions about our hotels, bookings, amenities, and policies. If you have any other inquiries, feel free to contact our support team.'
            />
            <div className='mt-10'>
            {faqs.map((faq) => (
                <div key={faq.id} className="faq-item flex flex-col gap-4 py-2 pb-3 border-b border-gray-300">
                    <div className='flex items-center justify-between' onClick={()=> handleopen(faq.id)}>
                        <h3 className='font-bold'>{faq.question}</h3>
                        <button>
                            {selectedFaqId === faq.id ? 
                            <span className='text-2xl bold bg-gray-200 rounded-full py-0 px-2.5'>-</span> : 
                            <span className='text-2xl bold bg-gray-200 rounded-full py-0 px-2'>+</span>}
                        </button>
                    </div>
                    <div>    
                    {
                        selectedFaqId === faq.id && <p>{faq.answer}</p>
                    }
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Faq