"use client";
import { useState } from "react";

export default function Web() {

  // State to hold the input value
  const [inputText, setInputText] = useState('');
  // State to hold button text
  const [buttonText, setButtonText] = useState('Copy Text');

  // Function to handle input change
  const handleInputChange = (e: any) => {
    // Remove spaces from the input value
    const transformedText = e.target.value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/đ/g, "d")
    .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "") // Huyền sắc hỏi ngã nặng 
    .replace(/\u02C6|\u0306|\u031B/g, "")
    .replace('-', '')
    .replace(/\s{2,}/g, ' ').split(' ').join('-')
    setInputText(transformedText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => {
        setButtonText('Copied!');  // Update button text to "Copied!"
        setTimeout(() => setButtonText('Copy Text'), 2000); // Reset the button text after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Next.js Image Path Generation
            </h1>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm"></span>
            </div>
            <input 
              type="text" 
              name="price" 
              id="price" 
              className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              placeholder="Iu bạn Lu nhiều ạ" 
              onChange={handleInputChange}
              />
          </div>
          <div className="mt-4 p-5 rounded-md bg-slate-100 text-lg font-medium text-gray-700 dark:text-gray-300">
            {inputText}
          </div>

          <button 
            onClick={handleCopyClick} 
            className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            {buttonText} {/* Button text updates dynamically */}
          </button>
          </div>
        </div>
      </section>
    </>
  )
}
