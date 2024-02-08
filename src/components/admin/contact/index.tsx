"use client";

import React, { useEffect, useState } from "react";

interface ContactData {
  _id: string;
  name: string;
  email: string;
  content: string;
}

const AdminContact = () => {
  const [data, setData] = useState<ContactData[]>()

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await fetch('api/contact/get', {
          method: 'GET'
        })

        const result = await res.json()
        setData(result)
      } catch (err) {
        console.log(err)
      }
    }

    getAllData()
  }, [])
  return (
    <>
      {data?.map((contact, index) => (
        <div key={index} className="bg-white p-3 rounded-md mb-4">
          <p><span className="font-bold">名前: </span>{contact.name}</p>
          <p className="mt-2"><span className="font-bold">メール: </span>{contact.email}</p>
          <p className="mt-2"><span className="font-bold">内容: </span>{contact.content}</p>
        </div>
      ))}
    </>
  );
};

export default AdminContact;
