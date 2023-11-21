"use client"

import { Modal } from "@/components/Modal";
import { Sneaker } from "@/components/Sneaker";
import { sneakersFemList } from "@/data/sneakersList";
import { useState } from "react";

const Page = () => {

  const [showModal, setShowModal] = useState(false)
  const [imageModal, setImageModal] = useState('')

  const openModal = (id: number) => {
    const photo = sneakersFemList.find(item => item.id === id)
    if (photo) {
      setImageModal(photo.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <main className="max-w-[1000px] flex justify-start flex-wrap gap-20 mx-auto py-4">
        {sneakersFemList.map(item => (
          <div className="mx-auto">
            <Sneaker key={item.id} photo={item} onClick={() => openModal(item.id)} />
          </div>
        ))}
      </main>
      {showModal &&
        <Modal photo={imageModal} onClick={closeModal} />
      }
    </>
  )
}

export default Page;