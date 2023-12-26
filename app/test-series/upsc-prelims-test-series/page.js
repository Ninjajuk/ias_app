
'use client'
import {PreMains} from '../../classroom-courses/coursesdata'


const TestSeries=()=>{


    return (
      <>
        <section>
          <div className="max-w-[1200px] mx-auto ">
            <h1 className="text-4xl my-4">Prelims Test Series</h1>
     
            <p className="py-4">
              The importance of practicing UPSC Prelims test series has been
              proven time and again with the increasing difficulty of the exam
              with passing years. Explore the finest test series comprising
              relevant questions strictly based on the UPSC CSE exam pattern.
            </p>
            <h1 className="py-4 text-lg font-semibold">
              Prelims Test Series for CSE 2024 (Offline/Online)
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
              {PreMains.slice(0, 2).map((item,index) => (
                <a key={index} href="">
                  <div  className="h-[400px] bg-gray-200 flex flex-col rounded-md shadow-md">
                    <div className="bg-red-400 h-2/5 w-full">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover"
                        alt={item.title}
                      />
                    </div>
                    <div className="bg-gray-100 h-3/5 flex flex-col">
                      <h1 className="my-4 px-4 text-2xl">{item.title}</h1>
                      <p className="flex items-center px-4">
                        <span className="text-lg">{item.icon}</span>
                        <span className="px-4">{item.para1}</span>
                      </p>
                      <p className="flex items-center px-4 py-2">
                        {" "}
                        <span className="text-lg">{item.icon2}</span>
                        <span className="px-4">{item.para2}</span>
                      </p>
                      <p className="flex items-center px-4 py-2">
                        <span className="text-lg">{item.icon3}</span>
                        <span className="px-4">{item.para3}</span>
                      </p>
                      <div className="mt-auto">
                        <button className="w-1/2 bg-blue-400 px-4 py-2 text-white">
                          Offline
                        </button>
                        <button className="w-1/2 bg-white px-4 py-2 border-2 border-blue-600 text-blue-600">
                          online
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}
export default TestSeries;