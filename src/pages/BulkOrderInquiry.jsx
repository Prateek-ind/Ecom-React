import React from 'react'
import BulkOrderInquiryForm from '../components/BulkOrderInquiryForm'

const BulkOrderInquiry = () => {
  return (
   <section className='max-w-3xl mx-auto px-4 py-10 bg-[#feffec]'>
    <div className='mb-6 mt-24 text-center' >
        
    <h3 className='text-sm text-gray-700 tracking-widest mb-8 uppercase'>Bulk Order Inquiry</h3>
    <h2 className='text-4xl text-gray-700 tracking-widest mb-8 uppercase'>Share your requirements</h2>
    <p className='text-xs text-gray-700 tracking-widest mb-8 italic'>Tell us your needs, and our team will get in touch with a tailored quotation.</p>
    </div>
    <hr />
    <BulkOrderInquiryForm/>
   </section>
  )
}

export default BulkOrderInquiry