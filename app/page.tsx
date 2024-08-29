"use client";
// import { Metadata } from "next"
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Image Path Generation",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://next-enterprise.vercel.app/",
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
//       },
//     ],
//   },
// }

export default function Web() {

  // State to hold the input value
  const [inputText, setInputText] = useState('');

  // Function to handle input change
  const handleInputChange = (e: any) => {
    // Remove spaces from the input value
    const transformedText = e.target.value.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace('-', '')
    .replace(/\s{2,}/g, ' ').split(' ').join('-')
    setInputText(transformedText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => {
        alert("Text copied to clipboard!");
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
            Copy Text
          </button>
          </div>
        </div>
      </section>
    </>
  )
}
