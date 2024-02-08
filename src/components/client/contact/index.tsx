'use client'

import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async () => {
        try {

            const data = {
                name: name,
                email: email,
                content: content
            }

            await fetch('/api/contact/post', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            alert('送信しました')
        } catch (err) {
            alert('送信に失敗しました')
        }
    }
    return (
        <div className='container flex flex-col items-center justify-center'>
            <h1 className='mb-20 font-bold text-4xl'>Contact</h1>
            <div className='w-3/4 flex flex-wrap items-center justify-center'>
                <form onSubmit={handleSubmit} className='w-full h-full rounded-md p-6 bg-white bg-opacity-50 flex flex-col'>
                    <label>お名前</label>
                    <input required onChange={(e) => setName(e.target.value)} placeholder='Your name' className='rounded-sm mt-2 text-black border focus:outline-none py-1 px-3' type="text" />

                    <label className='mt-6'>メールアドレス</label>
                    <input required onChange={(e) => setEmail(e.target.value)} className='rounded-sm mt-2 focus:outline-none py-1 px-3 text-black' placeholder='Email' type="email" />

                    <label className='mt-6'>内容</label>
                    <textarea required onChange={(e) => setContent(e.target.value)} placeholder='Please feel free to write down anything you want!!' className='rounded-sm mt-2 h-36 px-3 py-1 focus:outline-none text-black'></textarea>

                    <button type='submit' className='bg-white bg-opacity-30 rounded-md hover:opacity-80 w-1/5 py-2 mt-6 m-auto border'>
                        送信
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact